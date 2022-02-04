import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { StyledContainer, StyledIcon } from './SectionTitle.styled'

const SectionTitle = ({ title }) => (
  <StyledContainer>
    <StyledIcon icon={faCaretRight} size="lg" />
    <h2>{title}</h2>
  </StyledContainer>
)

export default SectionTitle
