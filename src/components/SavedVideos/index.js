import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoCard from '../TrendingVideoCard'
import AppContext from '../../context/AppContext'

import {
  HeaderContainer,
  TrendingIcon,
  TrendingText,
  SideBarContainer,
  SavedVideosContainer,
  SavedVideoContentContainer,
  FailureContentContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  SavedVideoCardContainer,
} from './styledComponents'

class SavedVideos extends Component {
  renderFailureView = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <FailureContentContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <FailureHeading isDarkTheme={isDarkTheme}>
              No saved videos found
            </FailureHeading>
            <FailureDescription isDarkTheme={isDarkTheme}>
              You can save your videos while watching them
            </FailureDescription>
          </FailureContentContainer>
        )
      }}
    </AppContext.Consumer>
  )

  renderSavedVideoView = savedVideoList => (
    <SavedVideoCardContainer>
      {savedVideoList.map(eachVideo => (
        <TrendingVideoCard VideoItemDetails={eachVideo} key={eachVideo.id} />
      ))}
    </SavedVideoCardContainer>
  )

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {savedVideoList, isDarkTheme} = value
          const hasSavedVideos = savedVideoList.length > 0

          return (
            <>
              <Header />
              <SavedVideosContainer
                data-testid="savedVideos"
                isDarkTheme={isDarkTheme}
              >
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <SavedVideoContentContainer>
                  <HeaderContainer>
                    <TrendingIcon />
                    <TrendingText>Saved Videos</TrendingText>
                  </HeaderContainer>
                  {/* Display either saved videos or failure view based on list length */}
                  {hasSavedVideos
                    ? this.renderSavedVideoView(savedVideoList)
                    : this.renderFailureView()}
                </SavedVideoContentContainer>
              </SavedVideosContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default SavedVideos
