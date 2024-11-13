import {Link} from 'react-router-dom'
import AppContext from '../../context/AppContext'
import {
  GamingVideoCardItem,
  ThumbnailVideoImage,
  Title,
} from './styledComponents'

const GamingVideoCard = props => {
  const {GamingVideoCardDetails} = props
  const {thumbnailUrl, title, viewCount, id} = GamingVideoCardDetails
  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <GamingVideoCardItem>
            <ThumbnailVideoImage src={thumbnailUrl} alt="video thumbnail" />
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <Title isDarkTheme={isDarkTheme}>{title}</Title>
              <Title viewsCount isDarkTheme={isDarkTheme}>
                {viewCount} Watching WorldWide
              </Title>
            </Link>
          </GamingVideoCardItem>
        )
      }}
    </AppContext.Consumer>
  )
}

export default GamingVideoCard
