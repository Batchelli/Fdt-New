import React from 'react'
import Router from './router'
import { TypeProvider } from './UseAuth'

const App = () => {
  return (
    <TypeProvider>
      <Router />
    </TypeProvider>
  )
}

export default App