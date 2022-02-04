import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getDiscoverMovies, getSearchMovies } from 'services'
import { SearchBar, MovieCard, SectionTitle, StarsFilter } from 'components'
import {
  StyledContainer,
  StyledHeader,
  StyledTitleLogo,
  StyledTitle,
  StyledBody,
  StyledHeaderBody,
  StyledGridMovies,
  StyledMovieCardContainer,
  StyledLogo,
} from './Discover.styled'

const Discover = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [searchedMovies, setSearchedMovies] = useState(null)
  const [filteredMovies, setFilteredMovies] = useState(null)
  const [rating, setRating] = useState(0)

  const setDiscoverMovies = async () => {
    try {
      const movies = await getDiscoverMovies()
      setMovies(movies)
    } catch (err) {
      console.log(err)
    }
  }

  const setSearchMovies = async query => {
    try {
      const movies = await getSearchMovies(query)
      setSearchedMovies(movies)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const query = searchParams.get('query')

    if (query) {
      setSearchMovies(query)
      setSearchValue(query)
    } else {
      setDiscoverMovies()
    }
  }, [])

  const handleSearch = e => {
    e.preventDefault()
    const { value } = e.target[0]

    navigate(`/search?query=${value}`)
    setRating(0)
    setFilteredMovies(null)
    setSearchValue(value)

    if (value) setSearchMovies(value)
  }

  const handleRating = ratingNumber => {
    if (ratingNumber === rating) {
      setRating(0)
      setFilteredMovies(null)
    } else {
      const parseRating = ratingNumber/10
      const filterMovies = searchedMovies.filter(({ vote_average }) => vote_average > (parseRating - 2) && vote_average < parseRating)
      setFilteredMovies(filterMovies)      
      setRating(ratingNumber)
    }
  }

  const handleMovie = movie => navigate(`/movie/${movie.id}`, { state: movie })

  const RenderMovies = ({ arrayMovies }) => (
    arrayMovies.map(movie => {
      const { poster_path, title, id } = movie
      return (
        <StyledMovieCardContainer onClick={() => handleMovie(movie)} key={`movie-${title}-${id}`}>
          <MovieCard imgUrl={poster_path} name={title} />
        </StyledMovieCardContainer>
      )
    })
  )

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitleLogo>
          <StyledTitle>Welcome to Movies Challenge</StyledTitle>
          <StyledLogo />
        </StyledTitleLogo>
        <SearchBar onSubmit={handleSearch} />
      </StyledHeader>
      <StyledBody>
        <StyledHeaderBody>
          <SectionTitle title={searchValue ? `Search: ${searchValue}` : 'Discover'} />
          {searchedMovies && <StarsFilter rate={rating} handleVote={handleRating} />}
        </StyledHeaderBody>
        <StyledGridMovies>
          {
            movies && movies.length > 0 && !searchedMovies
              ? <RenderMovies arrayMovies={movies} />
              : searchedMovies && searchedMovies.length > 0
                ? <RenderMovies arrayMovies={filteredMovies ? filteredMovies : searchedMovies} />
                : 'Loading'
          }
        </StyledGridMovies>
      </StyledBody>
    </StyledContainer>
  )
}

export default Discover
