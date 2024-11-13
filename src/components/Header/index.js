import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon, FaSun, FaBars} from 'react-icons/fa'

import {FiLogOut} from 'react-icons/fi'
import AppContext from '../../context/AppContext'

import {
  HeaderBackgroundContainer,
  HeaderContent,
  WebSiteLogo,
  HeaderMenu,
  CustomButton,
  HamburgerButton,
  LogOutIcon,
  ProfileImage,
  LogOutButton,
  PopupContentContainer,
  PopupInstruction,
  PopupButtonContainer,
  PopupCancelButton,
  PopupConformButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  const renderHeaderMenu = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        const onClickDarkTheme = () => {
          toggleTheme()
        }

        const logoUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const themeIcon = isDarkTheme ? (
          <FaSun size={30} color="#ffffff" />
        ) : (
          <FaMoon size={30} />
        )

        return (
          <>
            <Link to="/">
              <WebSiteLogo src={logoUrl} alt="website logo" />
            </Link>
            <HeaderMenu>
              {/* Toggle theme button */}
              <CustomButton
                type="button"
                onClick={onClickDarkTheme}
                data-testid="theme"
              >
                {themeIcon}
              </CustomButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogOutButton type="button" onClick={onClickLogout}>
                    Logout
                  </LogOutButton>
                }
              >
                {close => (
                  <>
                    <PopupContentContainer>
                      <PopupInstruction>
                        Are you sure you want to logout?
                      </PopupInstruction>
                      <PopupButtonContainer>
                        <PopupCancelButton
                          type="button"
                          outline
                          onClick={close}
                        >
                          Cancel
                        </PopupCancelButton>
                        <PopupConformButton
                          type="button"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </PopupConformButton>
                      </PopupButtonContainer>
                    </PopupContentContainer>
                  </>
                )}
              </Popup>
              <HamburgerButton type="button">
                <FaBars size={30} />
              </HamburgerButton>

              <Popup
                modal
                trigger={
                  <LogOutIcon type="button" onClick={onClickLogout}>
                    <FiLogOut size={30} />
                  </LogOutIcon>
                }
              >
                {close => (
                  <>
                    <PopupContentContainer>
                      <PopupInstruction>
                        Are you sure you want to logout?
                      </PopupInstruction>
                      <PopupButtonContainer>
                        <PopupCancelButton
                          type="button"
                          outline
                          onClick={close}
                        >
                          Cancel
                        </PopupCancelButton>
                        <PopupConformButton
                          type="button"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </PopupConformButton>
                      </PopupButtonContainer>
                    </PopupContentContainer>
                  </>
                )}
              </Popup>
            </HeaderMenu>
          </>
        )
      }}
    </AppContext.Consumer>
  )

  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <HeaderBackgroundContainer isDarkTheme={isDarkTheme}>
            <HeaderContent>{renderHeaderMenu()}</HeaderContent>
          </HeaderBackgroundContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
