import styled from 'styled-components'
import {AiFillFire} from 'react-icons/ai'

export const HeaderContainer = styled.div`
  display: flex;
  padding-left: 20px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #ebebeb;
  @media screen and (min-width: 768px) {
    height: auto;
    min-height: 100px;
    max-height: 150px;
  }
`

export const TrendingIcon = styled(AiFillFire)`
  color: #ff0000;
  background-color: #cbd5e1;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 100%;
  padding: 12px;
  margin-top: auto;
  margin-bottom: auto;
  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
    padding: 20px;
  }
`

export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: #212121;
  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`
export const SideBarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const SavedVideosContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const SavedVideoContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  //   border: 1px solid red;
`

export const FailureContentContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 350px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#212121')};
  margin-bottom: 0px;
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#616e7c')};
  text-align: center;
`
export const SavedVideoCardContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 30px;
  flex-wrap: wrap;
  //   border: 1px solid red;
`
