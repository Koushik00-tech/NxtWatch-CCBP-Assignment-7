import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import AppContext from '../../context/AppContext'

import {
  SideBarContainer,
  SideMenu,
  MenuItem,
  MenuText,
  ContactInfoContainer,
  ContactText,
  MediaLogosContainer,
  SocialMediaImage,
  ContactInfoDescription,
} from './styledComponents'

const SideBar = () => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const renderContactInformation = () => (
        <ContactInfoContainer>
          <ContactText>CONTACT US</ContactText>
          <MediaLogosContainer>
            <SocialMediaImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <SocialMediaImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <SocialMediaImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </MediaLogosContainer>
          <ContactInfoDescription>
            Enjoy! Now to see your channels and recommendations!
          </ContactInfoDescription>
        </ContactInfoContainer>
      )

      return (
        <SideBarContainer isDarkTheme={isDarkTheme}>
          <SideMenu isDarkTheme={isDarkTheme}>
            <Link to="/" style={{textDecoration: 'none'}}>
              <MenuItem>
                <AiFillHome size={26} color="#64748b" />
                <MenuText isDarkTheme={isDarkTheme}>Home</MenuText>
              </MenuItem>
            </Link>
            <Link to="/trending" style={{textDecoration: 'none'}}>
              <MenuItem>
                <AiFillFire size={26} color="#64748b" />
                <MenuText isDarkTheme={isDarkTheme}>Trending</MenuText>
              </MenuItem>
            </Link>
            <Link to="/gaming" style={{textDecoration: 'none'}}>
              <MenuItem>
                <SiYoutubegaming size={26} color="#64748b" />
                <MenuText isDarkTheme={isDarkTheme}>Gaming</MenuText>
              </MenuItem>
            </Link>
            <Link to="/saved-videos" style={{textDecoration: 'none'}}>
              <MenuItem>
                <CgPlayListAdd size={26} color="#64748b" />
                <MenuText isDarkTheme={isDarkTheme}>Saved videos</MenuText>
              </MenuItem>
            </Link>
          </SideMenu>
          {renderContactInformation()}
        </SideBarContainer>
      )
    }}
  </AppContext.Consumer>
)

export default SideBar
