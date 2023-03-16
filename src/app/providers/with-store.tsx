import React, { type ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from '../store'

export const withStore = (
  component: () => ReactNode
): (() => JSX.Element) => {
  const WrappedComponent = (): JSX.Element => (
    <Provider store={store}>
      {component()}
    </Provider>
  )
  return WrappedComponent
}
