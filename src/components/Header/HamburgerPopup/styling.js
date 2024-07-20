import styled from 'styled-components'

export const HamburgerButton = styled.button`
  margin-right: 10px;
  height: 40px;
  width: 40px;
  font-size: 30px;
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  color: ${props => props.color};
`

export const HamburgerContainer = styled.div``

export const SubContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 25vh;
`

export const MenuContainer = styled.div`
  width: 100vw;
`

export const CloseButton = styled.button`
  margin-right: 30px;
  font-size: 35px;
  padding: 0px;
  cursor: pointer;
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.isDarkMode ? '#e2e8f0' : 'black')};
`

export const NavItems = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin-top: 0px;
  padding-top: 0px;
  width: 100%;
`
