import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const MovieListPage = lazy(async () => await import('./movie-list'))

export const Routing = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<MovieListPage />} />
    </Routes>
  )
}
