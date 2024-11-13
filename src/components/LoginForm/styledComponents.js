import styled from 'styled-components'

export const LoginBackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  align-items: center;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8fafc;
  width: 400px;
  padding: 60px 48px 60px 48px;
  box-shadow: 0px 4px 8px 0 rgba(7, 7, 7, 0.08);
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    width: 480px;
  }
`

export const WebsiteLogo = styled.img`
  width: 180px;
  margin-bottom: 50px;
`

export const Form = styled.form`
  width: 100%;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CustomLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  color: #475569;
  margin-top: ${props => (props.checkbox ? '' : '20px')};
`

export const CustomInput = styled.input`
  border: 1.5px solid #d7dfe9;
  border-radius: 2px;
  margin-top: 5px;
  padding: 12px 16px 12px 16px;
`

export const CheckBoxInput = styled.input`
  height: 16px;
  width: 16px;
  margin-right: 7px;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
`
export const SubmitButton = styled.button`
  width: 100%;
  border-radius: 8px;
  padding: 8px 16px 8px 16px;
  color: #f4f4f4;
  background-color: #3b82f6;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 14px;
  margin-left: 8px;
  margin-top: 5px;
`
