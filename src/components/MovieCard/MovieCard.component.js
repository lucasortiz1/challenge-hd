import { StyledImage, StyledNoImage, StyledSpan } from './MovieCard.styled'

const MovieCard = ({ imgUrl, name }) => (
  imgUrl
    ? <StyledImage src={`http://image.tmdb.org/t/p/w400${imgUrl}`} />
    : (
      <StyledNoImage>
        <StyledSpan>{name}</StyledSpan>
      </StyledNoImage>
    )
)

export default MovieCard
