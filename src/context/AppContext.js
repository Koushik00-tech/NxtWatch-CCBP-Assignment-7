import React from 'react'

const AppContext = React.createContext({
  savedVideoList: [],
  addVideoToList: () => {},
  isDarkTheme: false,
  toggleTheme: () => {},
})

export default AppContext
