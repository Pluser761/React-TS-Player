import React from 'react'

import { Routing } from 'pages'

import { withProviders } from './providers'

import './styles/index.scss'

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Routing />
    </div>
  )
}

export default withProviders(App)
