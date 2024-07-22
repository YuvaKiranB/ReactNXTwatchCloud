import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  @media (min-width: 768px) {
    width: 50%;
  }
`

export const SearchInput = styled.input`
  padding: 8px;
  font-family: roboto;
  font-size: 18px;
  width: 80%;
  border: 1px solid #7e858e;
  border-top-left-radius: 5 px;
  border-bottom-left-radius: 5 px;
  outline: none;
  background-color: transparent;
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
`

export const SearchButton = styled.button`
  width: 20%;
  border: 1px solid #7e858e;
  border-top-right-radius: 5 px;
  border-bottom-right-radius: 5 px;
  font-size: 16px;
  color: #7e858e;
  cursor: pointer;
  background-color: ${props => (props.isDarkMode ? '#424242' : '#f1f1f1')};
`

export const CardsList = styled.ul`
  padding-left: 0px;
  list-style: none;
  overflow: scroll;
  height: 100vh;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
  }
`

export const NoResultContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
`

export const NoResultImage = styled.img`
  width: 80%;
  margin-bottom: 20px;
`

export const NoResultHeading = styled.h1`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 5px;
  font-family: roboto;
  color: ${props => (props.isDarkMode ? '#f1f1f1' : 'black')};
`

export const NoResultPara = styled.p`
  margin-top: 8px;
  font-family: roboto;
  font-size: 20px;
  color: #475569;
`

export const RetryButton = styled.button`
  padding: 15px;
  width: 120px;
  background-color: #4f46e5;
  font-family: roboto;
  font-size: 16px;
  color: white;
  border-width: 0px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
`

export const LoaderContainer = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
