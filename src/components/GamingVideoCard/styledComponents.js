import styled from 'styled-components'

export const GamingVideoCardItem = styled.li`
  width: 48%;
  @media screen and (min-width: 768px) {
    width: 32%;
  }
`

export const ThumbnailVideoImage = styled.img`
  width: 100%;
  height: 300px;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: ${props => (props.viewsCount ? '18px' : '22px')};
  font-weight: ${props => (props.viewsCount ? '400' : '600')};
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#212121')};
`
