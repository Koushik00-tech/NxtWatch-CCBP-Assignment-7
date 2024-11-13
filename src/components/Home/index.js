import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {IoIosClose} from 'react-icons/io'
import {MdSearch} from 'react-icons/md'
import Header from '../Header'
import HomeVideoCard from '../HomeVideoCard'
import SideBar from '../SideBar'
import AppContext from '../../context/AppContext'

import {
  HomeBackGroundContainer,
  HomeBannerContainer,
  WebsiteLogo,
  BannerText,
  GetNowButton,
  CloseButton,
  BannerContent,
  SearchInputContainer,
  SearchInputElement,
  IconButton,
  VideoItemContainer,
  FailureContentContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureRetryButton,
  LoaderContainer,
  SideBarHomeContainer,
  HomeContent,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  in_Progress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    isBannerClosed: false,
    videosData: [],
    apiStatus: apiConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiConstants.in_Progress})
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

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
      this.setState({videosData: updatedData, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchVideos = () => {
    const {searchInput} = this.state
    if (searchInput.trim() !== '') {
      this.getVideos()
      this.setState({searchInput: ''})
    }
  }

  renderSearchInput = () => {
    const {searchInput} = this.state
    return (
      <SearchInputContainer>
        <SearchInputElement
          type="search"
          placeholder="Search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <IconButton onClick={this.onSearchVideos} data-testid="searchButton">
          <MdSearch size={20} />
        </IconButton>
      </SearchInputContainer>
    )
  }

  renderVideoItem = () => {
    const {videosData} = this.state
    if (videosData.length === 0) {
      return this.renderRandomWordSearch()
    }
    return (
      <VideoItemContainer>
        {videosData.map(eachVideo => (
          <HomeVideoCard VideoItemDetails={eachVideo} key={eachVideo.id} />
        ))}
      </VideoItemContainer>
    )
  }

  renderRandomWordSearch = () => (
    <FailureContentContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureHeading>No Search results found</FailureHeading>
      <FailureDescription>
        Try different key words or remove search filter
      </FailureDescription>
      <FailureRetryButton type="button" onClick={this.getVideos}>
        Retry
      </FailureRetryButton>
    </FailureContentContainer>
  )

  closeBanner = () => {
    this.setState({isBannerClosed: true})
  }

  renderBanner = () => (
    <HomeBannerContainer data-testid="banner">
      <BannerContent>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
        <GetNowButton type="button">GET IT NOW</GetNowButton>
      </BannerContent>
      <CloseButton type="button" onClick={this.closeBanner} data-testid="close">
        <IoIosClose size={30} />
      </CloseButton>
    </HomeBannerContainer>
  )

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
        return this.renderVideoItem()
      case 'IN_PROGRESS':
        return this.renderLoader()
      case 'FAILURE':
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {isBannerClosed} = this.state

    return (
      <>
        <Header />
        <AppContext.Consumer>
          {value => {
            const {isDarkTheme} = value

            return (
              <HomeBackGroundContainer
                data-testid="home"
                isDarkTheme={isDarkTheme}
              >
                <SideBarHomeContainer>
                  <SideBar />
                </SideBarHomeContainer>
                <HomeContent>
                  {!isBannerClosed ? this.renderBanner() : ''}
                  {this.renderSearchInput()}
                  {this.renderApiStatus()}
                </HomeContent>
              </HomeBackGroundContainer>
            )
          }}
        </AppContext.Consumer>
      </>
    )
  }
}

export default Home
