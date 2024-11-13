import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import AppContext from '../../context/AppContext'

import {
  VideoCardItem,
  ThumbnailVideoImage,
  ProfileImage,
  Title,
  ChannelName,
  ProfileViewsContainer,
  ViewsItem,
  ProfileDetailsContainer,
  ProfileSection,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {VideoItemDetails} = props
  const {
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channelName,
    channelProfileImageUrl,
    id,
  } = VideoItemDetails

  const parsedDate = new Date(publishedAt)
  const publishedTime = formatDistanceToNow(parsedDate)

  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideoCardItem>
            <ThumbnailVideoImage src={thumbnailUrl} alt="video thumbnail" />
            <ProfileSection>
              <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
                <ProfileImage src={channelProfileImageUrl} alt="channel logo" />
                <ProfileDetailsContainer>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <ChannelName isDarkTheme={isDarkTheme}>
                    {channelName}
                  </ChannelName>
                  <ProfileViewsContainer>
                    <ViewsItem views isDarkTheme={isDarkTheme}>
                      <p>{viewCount}</p>
                    </ViewsItem>
                    <ViewsItem isDarkTheme={isDarkTheme}>
                      <p>{publishedTime} ago</p>
                    </ViewsItem>
                  </ProfileViewsContainer>
                </ProfileDetailsContainer>
              </Link>
            </ProfileSection>
          </VideoCardItem>
        )
      }}
    </AppContext.Consumer>
  )
}

export default TrendingVideoCard
