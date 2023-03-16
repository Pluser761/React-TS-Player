import { configureStore } from '@reduxjs/toolkit'

import { movieModel } from 'entities/movie'

export const store = configureStore({
  reducer: {
    movies: movieModel.reducer
  }
})
