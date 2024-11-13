import Header from '../Header'
import SideBar from '../SideBar'

import {
  NotFoundImage,
  SideBarContainer,
  NotFoundContent,
  NotFoundHeading,
  NotFoundDescription,
  MainContainer,
} from './styledComponents'

const NotFound = () => (
  <>
    <Header />
    <MainContainer>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <NotFoundContent>
        <NotFoundImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <NotFoundHeading>Page Not Found</NotFoundHeading>
        <NotFoundDescription as="p">
          We are sorry, the page you requested could not be found.
        </NotFoundDescription>
      </NotFoundContent>
    </MainContainer>
  </>
)

export default NotFound
