import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'

import VideoItemDetailsCard from '../VideoItemDetailsCard'
import AppContext from '../../context/AppContext'

import {
  VideoItemDetailsContainer,
  SideBarVideoItemDetailsContainer,
  VideoDetailsCardContainer,
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

class VideoItemDetails extends Component {
  state = {
    videoItemDetailsData: [],
    apiStatus: apiConstants.initial,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  updateIsLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  updateDisLike = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiConstants.in_Progress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const ApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(ApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = {
        id: fetchedData.video_details.id,
        publishedAt: fetchedData.video_details.published_at,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        title: fetchedData.video_details.title,
        viewCount: fetchedData.video_details.view_count,
        videoUrl: fetchedData.video_details.video_url,
        description: fetchedData.video_details.description,
        channelName: fetchedData.video_details.channel.name,
        channelProfileImageUrl:
          fetchedData.video_details.channel.profile_image_url,
        subscriberCount: fetchedData.video_details.channel.subscriber_count,
      }
      this.setState({
        videoItemDetailsData: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderVideoItemDetailsCard = () => {
    const {videoItemDetailsData, isLiked, isDisLiked} = this.state
    return (
      <VideoItemDetailsCard
        VideoItemCardDetails={videoItemDetailsData}
        updateIsLiked={this.updateIsLiked}
        updateDisLike={this.updateDisLike}
        isLiked={isLiked}
        isDisLiked={isDisLiked}
      />
    )
  }

  renderLoader = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
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
        return this.renderVideoItemDetailsCard()
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
              <VideoItemDetailsContainer
                data-testid="videoItemDetails"
                isDarkTheme={isDarkTheme}
              >
                <SideBarVideoItemDetailsContainer>
                  <SideBar />
                </SideBarVideoItemDetailsContainer>
                <VideoDetailsCardContainer>
                  {this.renderApiStatus()}
                </VideoDetailsCardContainer>
              </VideoItemDetailsContainer>
            )
          }}
        </AppContext.Consumer>
      </>
    )
  }
}

export default VideoItemDetails
