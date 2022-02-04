import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactComponent as Logo } from 'assets/logo.svg'

export const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

export const StyledHeader = styled.header`
  align-items: center;
  background-color: firebrick;
  display: flex;
  height: 60px;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 20px;
  width: 100%;
`

export const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`

export const StyledIcon = styled(FontAwesomeIcon)`
  color: #fff;
`

export const StyledTitleLogo = styled.div`
  display: flex;
`

export const StyledH1 = styled.h1`
  color: #fff;
`

export const StyledLogo = styled(Logo)`
  width: 40px;
`

export const StyledDescriptionBody = styled.div`
  margin: 0 10%;
`

export const StyledDescription = styled.div`
  display: flex;
  margin-top: 20px;
`

export const StyledImageContainer = styled.div`
  margin: 0 20px 20px 0;
  min-width: 400px;
`

export const StyledH2 = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`

export const StyledParagraph = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`
