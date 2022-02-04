import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StyledForm = styled.form`
  margin: 0 auto;
`

export const StyledSearchContainer = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`

export const StyledInput = styled.input`
  background: floralwhite;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  color: #909090;
  font-size: large;
  font-weight: lighter;
  height: 50px;
  outline: none;
  padding-left: 50px;
  width: 500px;

  &::placeholder {
    color: #909090;
    font-weight: lighter;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`

export const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 15px;
  position: absolute;
`
