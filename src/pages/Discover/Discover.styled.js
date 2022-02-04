import styled from 'styled-components'
import { ReactComponent as Logo } from 'assets/logo.svg'

export const StyledContainer = styled.div`
  background-color: floralwhite;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

export const StyledHeader = styled.header`
  align-items: center;
  background-color: firebrick;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  width: 100%;
`

export const StyledTitleLogo = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 40px;
`

export const StyledTitle = styled.h1`
  color: floralwhite;
  font-size: 50px;
  font-weight: 800;
`

export const StyledLogo = styled(Logo)`
  width: 100px;
`

export const StyledBody = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 60%;
  margin: 0 10%;
  padding-top: 30px;
`

export const StyledHeaderBody = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const StyledGridMovies = styled.div`
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
  width: 100%;
`

export const StyledMovieCardContainer = styled.button`
  border: none;
  cursor: pointer;
  height: auto;
  margin: 0 0 10px 10px;
  outline: none;
  width: 180px;

  &:nth-child(5n + 1) {
    margin: 0 0 10px 0;
  }
`
