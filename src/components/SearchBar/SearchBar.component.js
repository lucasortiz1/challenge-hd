import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { 
  StyledForm,
  StyledInput,
  StyledSearchContainer,
  StyledIcon,
} from './SearchBar.styled'

const SearchBar = ({ onSubmit }) => (
  <StyledForm role="search" onSubmit={onSubmit}>
    <StyledSearchContainer>
      <StyledIcon icon={faSearch} size="lg" />
      <StyledInput type="search" placeholder="Search movie" />
      <input type="submit" hidden />
    </StyledSearchContainer>
  </StyledForm>
)

export default SearchBar
