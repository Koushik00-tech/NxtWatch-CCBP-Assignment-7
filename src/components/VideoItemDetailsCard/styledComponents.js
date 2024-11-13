import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const InteractionButtonsContainer = styled.div`
  display: flex;
`
export const InteractionButton = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  border: none;
  background: none;
  margin-right: 10px;
`

export const LikedButton = styled(InteractionButton)`
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')}!important;
`

export const DisLikeButton = styled(InteractionButton)`
  color: ${props => (props.isDisLiked ? '#2563eb' : '#64748b')}!important;
`

export const InteractionButtonText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-left: 5px;
`

export const VideoPlayer = styled.div`
  width: 100%;
  height: 200px;

  @media screen and (min-width: 480px) {
    height: 300px;
  }

  @media screen and (min-width: 768px) {
    height: 400px;
  }

  @media screen and (min-width: 1200px) {
    height: 500px;
  }
`

export const VideoItem = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9')};
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9')};
`

export const VideoViewsAndTime = styled.ul`
  padding-left: 0px;
  display: flex;
`

export const ViewsItem = styled.li`
  margin-right: 30px;
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#f9f9f9 ' : '#64748b')};

  list-style-type: ${props => (props.views ? 'none' : 'disc')};
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`
export const ChannelTextContainer = styled.div`
  font-family: 'Roboto';
  font-size: 16px;
`
export const ChannelName = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9 ' : '#212121')};
`
export const ChannelSubscribers = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9 ' : '#64748b')};
`
export const ChannelDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  text-align: left;
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#f9f9f9 ' : '#383838')};

  @media screen and (min-width: 768px) {
    margin-left: 56px;
  }
`
