import styled from 'styled-components'

export const HomeBackGroundContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
`

export const HomeBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 18px 24px 18px 24px;
  display: flex;
  justify-content: space-between;
  height: 200px;
`

export const WebsiteLogo = styled.img`
  width: 150px;
`

export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #0f0f0f;
  font-weight: 400;
`
export const GetNowButton = styled.button`
  width: 110px;
  height: 36px;
  font-size: 14px;
  font-family: 'Roboto';
  background-color: transparent;
  color: #1e293b;
  border: 1.5px solid #1e293b;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;
`
export const CloseButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  margin-bottom: auto;
`
export const BannerContent = styled.div``

export const SearchInputContainer = styled.div`
  margin-top: 20px;
  border: 1.5px solid #cccccc;
  width: 400px;
  display: flex;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`

export const SearchInputElement = styled.input`
  border: none;
  outline: none;
  background-color: #fffffff;
  font-family: 'Roboto';
  padding: 8px 10px 8px 10px;
  border-right: 2px solid #cccccc;
  width: 80%;
  font-weight: 500;
`
export const IconButton = styled.button`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  color: #616e7c;
  border: none;
  cursor: pointer;
`

export const VideoItemContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 20px;
`
export const HomeContent = styled.div`
  width: 100%;
`

export const SideBarHomeContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    background-color: #ffffff;
    width: 400px;
  }
`

export const FailureContentContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 40%;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #212121;
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #616e7c;
  text-align: center;
`
export const FailureRetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: 600;
  padding-left: 10px;
  padding-right: 10px;
  width: 100px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 10px;
  cursor: pointer;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`
