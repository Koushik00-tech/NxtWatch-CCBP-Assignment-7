import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import AppContext from './context/AppContext'

import './App.css'

class App extends Component {
  state = {
    savedVideoList: [],
    isDarkTheme: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideoToSavedVideosList = video => {
    this.setState(prevState => ({
      savedVideoList: [...prevState.savedVideoList, video],
    }))
  }

  render() {
    const {savedVideoList, isDarkTheme} = this.state
    return (
      <>
        <AppContext.Provider
          value={{
            savedVideoList,
            addVideoToList: this.addVideoToSavedVideosList,
            isDarkTheme,
            toggleTheme: this.toggleTheme,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </AppContext.Provider>
      </>
    )
  }
}

export default App
