import {Link, withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import Context from '../../../Context'

import {Tab, Description, ListItem} from './styling'

const GetNavItem = props => {
  let icon = null
  let link = null

  const {activeNav, description, id} = props
  const isActive = activeNav === id
  if (id === 'HOME') {
    icon = <AiFillHome />
    link = '/'
  }
  if (id === 'TRENDING') {
    icon = <HiFire />
    link = '/trending'
  }
  if (id === 'GAMING') {
    icon = <SiYoutubegaming />
    link = '/gaming'
  }
  if (id === 'SAVED VIDEOS') {
    icon = <MdPlaylistAdd />
    link = '/saved-videos'
  }

  return (
    <Context.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <ListItem>
            <Link to={link} className="link">
              <Tab isActive={isActive} isDarkMode={isDarkMode}>
                {icon}
                <Description isActive={isActive} isDarkMode={isDarkMode}>
                  {description}
                </Description>
              </Tab>
            </Link>
          </ListItem>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(GetNavItem)
