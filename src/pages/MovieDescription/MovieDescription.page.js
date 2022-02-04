import { useEffect, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { getMovieById } from 'services'
import { SectionTitle, MovieCard } from 'components'
import {
  StyledDescriptionContainer,
  StyledHeader,
  StyledButton,
  StyledIcon,
  StyledTitleLogo,
  StyledH1,
  StyledLogo,
  StyledDescriptionBody,
  StyledDescription,
  StyledImageContainer,
  StyledH2,
  StyledParagraph,
} from './MovieDescription.styled'


const MovieDescription = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { state } = useLocation()
  const [movieData, setMovieData] = useState(state)

  useEffect(() => {
    if (!movieData) {
      getMovieById(id)
        .then(movieData => setMovieData(movieData))
        .catch(error => console.log(error))
    }
  }, [])

  const handleBack = () => navigate('/')

  return (
    <StyledDescriptionContainer>
      <StyledHeader>
        <StyledButton onClick={handleBack}>
          <StyledIcon icon={faArrowLeft} size="2x" />
        </StyledButton>
        <StyledTitleLogo>
          <StyledH1>Movies Challenge</StyledH1>
          <StyledLogo />
        </StyledTitleLogo>
      </StyledHeader>
      <StyledDescriptionBody>
        <SectionTitle title="Description" />
        <StyledDescription>
          <StyledImageContainer>
            <MovieCard imgUrl={movieData.poster_path} name={movieData.title} />
          </StyledImageContainer>
          <div>
            <StyledH2>Title: {movieData.title}</StyledH2>
            <StyledParagraph>
              <b>Original Language:</b> {movieData.original_language.toUpperCase()}
            </StyledParagraph>
            <StyledParagraph>
              <b>Release Date:</b> {movieData.release_date}
            </StyledParagraph>
            <StyledParagraph>
              <b>Overview:</b> {movieData.overview}
            </StyledParagraph>
          </div>
        </StyledDescription>
      </StyledDescriptionBody>
    </StyledDescriptionContainer>
  )
}

export default MovieDescription
