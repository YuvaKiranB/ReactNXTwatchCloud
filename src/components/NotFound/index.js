import Context from '../../Context'

import Header from '../Header'
import LeftPane from '../LeftPane'

import {
  NotFoundContainer,
  ContentContainer,
  RightPane,
  NotFoundImage,
  NotFoundPara1,
  NotFoundPara2,
  TextContainer,
} from './styling'

const NotFound = () => (
  <Context.Consumer>
    {value => {
      const {isDarkMode} = value

      return (
        <NotFoundContainer isDarkMode={isDarkMode}>
          <Header />
          <ContentContainer>
            <LeftPane />
            <RightPane>
              {isDarkMode ? (
                <NotFoundImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                  alt="not found"
                />
              ) : (
                <NotFoundImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                  alt="not found"
                />
              )}
              <TextContainer>
                <NotFoundPara1 isDarkMode={isDarkMode}>
                  Page Not Found
                </NotFoundPara1>
                <NotFoundPara2 isDarkMode={isDarkMode}>
                  We are sorry, the page you requested could not be found.
                </NotFoundPara2>
              </TextContainer>
            </RightPane>
          </ContentContainer>
        </NotFoundContainer>
      )
    }}
  </Context.Consumer>
)

export default NotFound
