import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoCard from '../TrendingVideoCard'
import AppContext from '../../context/AppContext'

import {
  TrendingHeaderContainer,
  TrendingText,
  TrendingIconContainer,
  SideBarTrendingContainer,
  TrendingContainer,
  TrendingVideoImageContainer,
  TrendingVideoContentContainer,
  FailureContentContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureRetryButton,
  LoaderContainer,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  in_Progress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class TrendingVideos extends Component {
  state = {
    TrendingVideosData: [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiConstants.in_Progress})
    const jwtToken = Cookies.get('jwt_token')
    const ApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(ApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        channelName: eachVideo.channel.name,
        channelProfileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        TrendingVideosData: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderVideoCard = () => {
    const {TrendingVideosData} = this.state
    return (
      <TrendingVideoImageContainer>
        {TrendingVideosData.map(eachVideo => (
          <TrendingVideoCard VideoItemDetails={eachVideo} key={eachVideo.id} />
        ))}
      </TrendingVideoImageContainer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <FailureContentContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request. Please try again.
      </FailureDescription>
      <FailureRetryButton type="button" onClick={this.getVideos}>
        Retry
      </FailureRetryButton>
    </FailureContentContainer>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderVideoCard()
      case 'IN_PROGRESS':
        return this.renderLoader()
      case 'FAILURE':
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <AppContext.Consumer>
          {value => {
            const {isDarkTheme} = value

            return (
              <TrendingContainer
                data-testid="trending"
                isDarkTheme={isDarkTheme}
              >
                <SideBarTrendingContainer>
                  <SideBar />
                </SideBarTrendingContainer>
                <TrendingVideoContentContainer>
                  <TrendingHeaderContainer>
                    <TrendingIconContainer>
                      <AiFillFire size={30} color=" #ff0b37" />
                    </TrendingIconContainer>
                    <TrendingText>Trending</TrendingText>
                  </TrendingHeaderContainer>
                  {this.renderApiStatus()}
                </TrendingVideoContentContainer>
              </TrendingContainer>
            )
          }}
        </AppContext.Consumer>
      </>
    )
  }
}

export default TrendingVideos
