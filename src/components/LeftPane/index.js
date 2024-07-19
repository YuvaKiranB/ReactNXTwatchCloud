import {withRouter} from 'react-router-dom'

import GetNavItem from './GetNavItem'

import Context from '../../Context'

import {
  LeftPaneContainer,
  Part1,
  Part2,
  ContactUs,
  Icon,
  IconsContainer,
  Description2,
  NavItems,
} from './styling'

const NavItemsList = [
  {id: 'HOME', description: 'Home'},
  {id: 'TRENDING', description: 'Trending'},
  {id: 'GAMING', description: 'Gaming'},
  {id: 'SAVED VIDEOS', description: 'Saved videos'},
]

const LeftPane = props => (
  <Context.Consumer>
    {value => {
      const {isDarkMode} = value

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

      return (
        <LeftPaneContainer isDarkMode={isDarkMode}>
          <Part1>
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
          </Part1>

          <Part2>
            <ContactUs isDarkMode={isDarkMode}>CONTACT US</ContactUs>
            <IconsContainer>
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconsContainer>
            <Description2 isDarkMode={isDarkMode}>
              Enjoy! Now to see your channels and recommendations!
            </Description2>
          </Part2>
        </LeftPaneContainer>
      )
    }}
  </Context.Consumer>
)

export default withRouter(LeftPane)
