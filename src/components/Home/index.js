import Header from '../Header'
import LeftPane from '../LeftPane'
import Banner from '../Banner'
import ResultContainer from './Result'
import Context from '../../Context'

import {ContentContainer, RightPane, HomeContainer} from './styling'

const Home = () => (
  <Context.Consumer>
    {value => {
      const {isDarkMode} = value

      return (
        <HomeContainer isDarkMode={isDarkMode} data-testid="home">
          <Header />
          <ContentContainer>
            <LeftPane />
            <RightPane>
              <Banner />
              <ResultContainer />
            </RightPane>
          </ContentContainer>
        </HomeContainer>
      )
    }}
  </Context.Consumer>
)

export default Home
