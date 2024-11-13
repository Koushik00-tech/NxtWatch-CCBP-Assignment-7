import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginBackgroundContainer,
  FormContainer,
  WebsiteLogo,
  Form,
  InputContainer,
  CustomLabel,
  CustomInput,
  CheckBoxContainer,
  CheckBoxInput,
  SubmitButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errMsg: '',
    showPassword: false,
  }

  onSubmitFailure = errMsg => {
    this.setState({errMsg})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <InputContainer>
        <CustomLabel htmlFor="username">USERNAME</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={this.onChangeUserName}
        />
      </InputContainer>
    )
  }

  renderPassword = () => {
    const {password, showPassword} = this.state
    const togglePasswordType = showPassword ? 'text' : 'password'
    return (
      <InputContainer>
        <CustomLabel htmlFor="password">PASSWORD</CustomLabel>
        <CustomInput
          type={togglePasswordType}
          placeholder="Password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </InputContainer>
    )
  }

  renderShowPassword = () => {
    const {showPassword} = this.state
    return (
      <CheckBoxContainer>
        <CheckBoxInput
          type="checkbox"
          id="checkbox"
          checked={showPassword}
          onChange={this.toggleShowPassword}
        />
        <CustomLabel htmlFor="checkbox" checkbox>
          Show Password
        </CustomLabel>
      </CheckBoxContainer>
    )
  }

  render() {
    const {errMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginBackgroundContainer>
        <FormContainer>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <Form onSubmit={this.onSubmitForm}>
            {this.renderUserName()}
            {this.renderPassword()}
            {this.renderShowPassword()}
            <SubmitButton type="submit">Login</SubmitButton>
            {errMsg && <ErrorMsg>*{errMsg}</ErrorMsg>}
          </Form>
        </FormContainer>
      </LoginBackgroundContainer>
    )
  }
}

export default LoginForm
