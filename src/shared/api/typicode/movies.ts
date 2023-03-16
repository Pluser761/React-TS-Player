import type { AxiosResponse } from 'axios'
import { type Movie } from '../models'
import { apiInstance } from './base'

const BASE_URL = '/movie'

export interface GetMoviesListParams {
  completed?: boolean
}

export const getMoviesList = async (params?: GetMoviesListParams): Promise<AxiosResponse<Movie[]>> => {
  return await apiInstance.get(BASE_URL + '/list')
}
