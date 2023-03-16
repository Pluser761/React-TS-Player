import { createSelector, createSlice, type Dispatch, type PayloadAction } from '@reduxjs/toolkit'
import { typecodeApi, type Movie } from 'shared/api'
import { useQuery } from 'react-query'
import { type AxiosResponse } from 'axios'
import { useSelector } from 'react-redux'
// TODO fix that import
import { type RootState } from 'app/store/types'

const MOVIE_SLICE_NAME = 'MovieList'

type Movies = Record<number, Movie>

export interface QueryConfig {
  completed?: boolean
}

export const initialState: {
  data: Movies
  queryConfig?: QueryConfig
} = {
  data: {},
  queryConfig: {}
}

export const movieModel = createSlice({
  name: MOVIE_SLICE_NAME,
  initialState,
  reducers: {
    setMoviesList: (state, { payload }: PayloadAction<Movie[]>) => {
      state.data = payload
    },
    setQueryConfig: (state, { payload }: PayloadAction<QueryConfig>) => {
      state.queryConfig = payload
    }
  }
})

export const { setQueryConfig } = movieModel.actions

// react-query actions

export const getMoviesListAsync =
 (params?: typecodeApi.movies.GetMoviesListParams) => (dispatch: Dispatch) =>
   useQuery<AxiosResponse<Movie[]>>(
     MOVIE_SLICE_NAME,
     async () => await typecodeApi.movies.getMoviesList(params),
     {
       onSuccess: ({ data }) => dispatch(movieModel.actions.setMoviesList(data)),
       refetchOnWindowFocus: false
     }
   )

// selectors

export const getMovies = (): Movie[] =>
  useSelector(
    createSelector(
      (state: RootState) => state.movies.data,
      (
        movies: RootState['movies']['data']
      ) => Object.values(movies).sort(
        (a: Movie, b: Movie) => a.title.localeCompare(b.title)
      )
    )
  )

// TODO why any, not boolean
export const isMoviesEmpty = (): boolean =>
  useSelector(
    createSelector(
      (state: RootState) => state.movies.data,
      (movies) => Object.keys(movies).length === 0
    )
  )

export const reducer = movieModel.reducer
