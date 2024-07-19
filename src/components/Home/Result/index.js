import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import GetVideoCard from '../VideoCard'
import ErrorCard from '../../ErrorComponent'

import Context from '../../../Context'

import {
  MainContainer,
  SearchBar,
  SearchInput,
  SearchButton,
  CardsList,
  NoResultContainer,
  NoResultImage,
  NoResultPara1,
  NoResultPara2,
  RetryButton,
  LoaderContainer,
} from './styling'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ResultContainer extends Component {
  state = {searchInput: '', cardsApiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCards()
  }

  changeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  updateSearchInput = () => {
    this.getCards()
  }

  changeSearchInput2 = event => {
    if (event.key === 'Enter') {
      this.getCards()
    }
  }

  getCards = async () => {
    this.setState({
      cardsApiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(videos => ({
        id: videos.id,
        title: videos.title,
        thumbnailUrl: videos.thumbnail_url,
        channel: {
          name: videos.channel.name,
          profileImageUrl: videos.channel.profile_image_url,
        },
        viewCount: videos.view_count,
        publishedAt: videos.published_at,
      }))

      this.setState({
        cardsList: updatedData,
        cardsApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({cardsApiStatus: apiStatusConstants.failure})
    }
  }

  renderNoResult = isDarkMode => (
    <NoResultContainer>
      <NoResultImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoResultPara1 isDarkMode={isDarkMode}>
        No Search results found
      </NoResultPara1>
      <NoResultPara2 isDarkMode={isDarkMode}>
        Try different key words or remove search filter
      </NoResultPara2>
      <RetryButton onClick={this.retry}>Retry</RetryButton>
    </NoResultContainer>
  )

  retry = () => {
    this.setState({searchInput: ''}, this.getCards)
  }

  render() {
    const {cardsApiStatus, searchInput, cardsList} = this.state

    return (
      <Context.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <MainContainer isDarkMode={isDarkMode}>
              <SearchBar>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.changeSearchInput}
                  onKeyDown={this.changeSearchInput2}
                  isDarkMode={isDarkMode}
                />
                <SearchButton
                  isDarkMode={isDarkMode}
                  onClick={this.updateSearchInput}
                  type="button"
                  data-testid="searchButton"
                >
                  <BsSearch />
                </SearchButton>
              </SearchBar>

              {cardsApiStatus === apiStatusConstants.success && (
                <CardsList>
                  {cardsList.length === 0
                    ? this.renderNoResult(isDarkMode)
                    : cardsList.map(eachItem => (
                        <GetVideoCard key={eachItem.id} content={eachItem} />
                      ))}
                </CardsList>
              )}
              {cardsApiStatus === apiStatusConstants.inProgress && (
                <LoaderContainer>
                  <div className="loader-container" data-testid="loader">
                    <Loader
                      type="ThreeDots"
                      color="#3b82f6"
                      height="50"
                      width="50"
                    />
                  </div>
                </LoaderContainer>
              )}

              {cardsApiStatus === apiStatusConstants.failure && (
                <ErrorCard clickedRetry={this.retry} />
              )}
            </MainContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(ResultContainer)
