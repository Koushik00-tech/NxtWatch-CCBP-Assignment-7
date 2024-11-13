import styled from 'styled-components'

export const HeaderBackgroundContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#424242' : '#ffffff')};
  display: flex;
  justify-content: center;
`

export const HeaderContent = styled.div`
  width: 90%;
  margin-top: 16px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WebSiteLogo = styled.img`
  width: 140px;
`

export const HeaderMenu = styled.div`
  display: flex;
`
export const CustomButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 10px;
`

export const HamburgerButton = styled(CustomButton)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogOutIcon = styled(CustomButton)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogOutButton = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    border: 1.5px solid #3b82f6;
    color: #3b82f6;
    background: none;
    cursor: pointer;
    margin-left: 10px;
    height: 30px;
    width: 80px;
    border-radius: 3px;
    font-weight: bold;
    font-family: Roboto;
  }
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 32px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const PopupContentContainer = styled.div`
  background-color: #ebebeb;
  width: 320px;
  height: 160px;
  border-radius: 10px;
  display: flex;
  flex-direction: Column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`
export const PopupButtonContainer = styled.div``

export const PopupInstruction = styled.h1`
  font-family: 'Roboto';
  color: #00306e;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
`

export const PopupConformButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 15px;
  font-family: 'Roboto';
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  color: ${props => (props.outline ? '#616e7c' : '#ffffff')};
  border: 1px solid ${props => (props.outline ? '#606060' : '#3b82f6')};
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  font-weight: 500;
`
export const PopupCancelButton = styled(PopupConformButton)`
  margin-right: 10px;
`
