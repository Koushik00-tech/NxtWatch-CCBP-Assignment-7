import styled from 'styled-components'

export const SideBarContainer = styled.div`
  padding-left: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#424242' : '#ffffff')};
`
export const SideMenu = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  background-color: ${props => (props.isDarkTheme ? '#424242' : '#ffffff')};
`

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
`

export const MenuText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};

  font-weight: 500;
  margin-left: 20px;
  font-size: 24px;
`
export const ContactInfoContainer = styled.div`
  margin-bottom: 50px;
`
export const ContactText = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
`
export const MediaLogosContainer = styled.div``
export const SocialMediaImage = styled.img`
  width: 36px;
  margin-right: 10px;
`
export const ContactInfoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`
