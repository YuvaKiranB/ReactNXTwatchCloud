import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiCloseLine} from 'react-icons/ri'

import GetNavItem from '../../LeftPane/GetNavItem'

import Context from '../../../Context'
import {
  HamburgerButton,
  HamburgerContainer,
  SubContainer,
  MenuContainer,
  CloseButton,
  NavItems,
} from './styling'

const NavItemsList = [
  {id: 'HOME', description: 'Home'},
  {id: 'TRENDING', description: 'Trending'},
  {id: 'GAMING', description: 'Gaming'},
  {id: 'SAVED VIDEOS', description: 'Saved videos'},
]

const GetHamburgerButton = props => (
  <Context.Consumer>
    {value => {
      const {isDarkMode} = value

      const color = isDarkMode ? 'white' : 'black'

      const {match} = props
      const {path} = match
      let activeNav = null

      if (path === '/') {
        activeNav = 'HOME'
      }
      if (path === '/trending') {
        activeNav = 'TRENDING'
      }
      if (path === '/gaming') {
        activeNav = 'GAMING'
      }
      if (path === '/saved-videos') {
        activeNav = 'SAVED VIDEOS'
      }
      const overlayStyles = {
        backgroundColor: isDarkMode ? '#231f20' : 'white',
      }

      return (
        <HamburgerContainer>
          <Popup
            modal
            trigger={
              <HamburgerButton type="button" color={color}>
                <GiHamburgerMenu />
              </HamburgerButton>
            }
            overlayStyle={overlayStyles}
          >
            {close => (
              <SubContainer>
                {/* eslint-disable-next-line */}
                <CloseButton
                  type="button"
                  onClick={() => close()}
                  isDarkMode={isDarkMode}
                >
                  <RiCloseLine />
                </CloseButton>
                <MenuContainer>
                  <NavItems>
                    {NavItemsList.map(eachItem => (
                      <GetNavItem
                        activeNav={activeNav}
                        key={eachItem.id}
                        description={eachItem.description}
                        id={eachItem.id}
                      />
                    ))}
                  </NavItems>
                </MenuContainer>
              </SubContainer>
            )}
          </Popup>
        </HamburgerContainer>
      )
    }}
  </Context.Consumer>
)

export default withRouter(GetHamburgerButton)
