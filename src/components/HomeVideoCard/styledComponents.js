import styled from 'styled-components'

export const VideoCardItem = styled.li`
  width: 400px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 32%;
  }
`

export const ThumbnailVideoImage = styled.img`
  width: 100%;
`
export const ProfileImageContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ProfileSection = styled.div`
  display: flex;
`
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 5px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#212121')};
`

export const ProfileViewsContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0px;
`

export const ViewsItem = styled.li`
  margin-right: 30px;
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#64748b')};
  list-style-type: ${props => (props.views ? 'none' : 'disc')};
`
export const ProfileDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 3px;
  font-size: 14px;
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#64748b')};
`
