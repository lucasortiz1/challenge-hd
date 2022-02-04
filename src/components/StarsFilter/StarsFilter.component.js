import { Rating } from 'react-simple-star-rating'
import { StyledStarsContainer } from './StarsFilter.styled'

const StarsFilter = ({ handleVote, rate = 0 }) => {
  return (
    <StyledStarsContainer>
      Filter by popularity:
      <Rating size={24} onClick={handleVote} ratingValue={rate} />
    </StyledStarsContainer>
  )
}

export default StarsFilter
