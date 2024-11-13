import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    background-color: #ffffff;
  }
`
export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f9f9f9;
`

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 50px;
`
export const NotFoundImage = styled.img`
  width: 300px;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 600;
  color: #000000;
`
export const NotFoundDescription = styled(NotFoundHeading)`
  color: #64748b;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
`
