import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'
import AppContext from '../../context/AppContext'

import {
  VideoItem,
  Title,
  VideoViewsAndTime,
  ViewsItem,
  VideoDetailsContainer,
  InteractionButtonsContainer,
  InteractionButton,
  InteractionButtonText,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelTextContainer,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  VideoPlayer,
  LikedButton,
  DisLikeButton,
} from './styledComponents'

const VideoItemDetailsCard = props => {
  const {
    VideoItemCardDetails,
    isLiked,
    updateIsLiked,
    updateDisLike,
    isDisLiked,
  } = props
  const {
    videoUrl,
    title,
    viewCount,
    publishedAt,
    channelName,
    channelProfileImageUrl,
    subscriberCount,
    description,
  } = VideoItemCardDetails

  const toggleIsLiked = () => {
    updateIsLiked()
  }

  const toggleIsDisLiked = () => {
    updateDisLike()
  }

  const parsedDate = new Date(publishedAt)
  const publishedTime = formatDistanceToNow(parsedDate)

  return (
    <AppContext.Consumer>
      {value => {
        const {addVideoToList, isDarkTheme} = value

        const onSaveVideo = () => {
          addVideoToList({...VideoItemCardDetails})
        }

        return (
          <VideoItem isDarkTheme={isDarkTheme}>
            <VideoPlayer>
              <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
            </VideoPlayer>
            <Title>{title}</Title>
            <VideoDetailsContainer>
              <VideoViewsAndTime>
                <ViewsItem isDarkTheme={isDarkTheme}>
                  {viewCount} views
                </ViewsItem>
                <ViewsItem isDarkTheme={isDarkTheme}>
                  {publishedTime} ago
                </ViewsItem>
              </VideoViewsAndTime>
              <InteractionButtonsContainer>
                <LikedButton
                  type="button"
                  onClick={toggleIsLiked}
                  isLiked={isLiked}
                >
                  <AiOutlineLike size={20} />
                  <InteractionButtonText>Like</InteractionButtonText>
                </LikedButton>
                <DisLikeButton
                  type="button"
                  onClick={toggleIsDisLiked}
                  isDisLiked={isDisLiked}
                >
                  <AiOutlineDislike size={20} />
                  <InteractionButtonText>Dislike</InteractionButtonText>
                </DisLikeButton>
                {/* Save button */}
                <InteractionButton type="button" onClick={onSaveVideo}>
                  <BiListPlus size={20} color="#64748b" />
                  <InteractionButtonText>Save</InteractionButtonText>
                </InteractionButton>
                {/* Save button */}
              </InteractionButtonsContainer>
            </VideoDetailsContainer>
            <hr />
            <ChannelDetailsContainer>
              <ChannelLogo src={channelProfileImageUrl} alt="channel logo" />
              <ChannelTextContainer>
                <ChannelName isDarkTheme={isDarkTheme}>
                  {channelName}
                </ChannelName>
                <ChannelSubscribers isDarkTheme={isDarkTheme}>
                  {subscriberCount} subscribers
                </ChannelSubscribers>
              </ChannelTextContainer>
            </ChannelDetailsContainer>
            <ChannelDescription isDarkTheme={isDarkTheme}>
              {description}
            </ChannelDescription>
          </VideoItem>
        )
      }}
    </AppContext.Consumer>
  )
}

export default VideoItemDetailsCard
