import React from 'react'
import { Col, Empty, Layout, Row, Spin, Typography } from 'antd'
import { useDispatch } from 'react-redux'

import { movieModel, MovieRow } from 'entities/movie'

import styles from './styles.module.scss'
import { type Movie } from 'shared/api'
import { getMovies } from 'entities/movie/model'

const MovieList = (): JSX.Element => {
  return (
    <Layout className={styles.root}>
      <Layout className={styles.toolbar}>
        <Row justify="center">
          <Typography.Title level={1}>Movies list</Typography.Title>
        </Row>
        <Row justify="center">
          filters
        </Row>
      </Layout>
      <Layout.Content className={styles.content}>
        <Row gutter={[0, 20]} justify="center">
          {PageContent()}
        </Row>
      </Layout.Content>
    </Layout>
  )
}

function PageContent (): any {
  const dispatch = useDispatch()

  const { isFetching } = movieModel.getMoviesListAsync()(dispatch)
  const moviesList = getMovies()
  const isEmpty = movieModel.isMoviesEmpty()

  if (isFetching) return <Spin size="large" />

  if (isEmpty) return <Empty description="No movies found" />

  return moviesList.map((movie: Movie) => (
    <Col key={movie.movieId} span={24}>
      <MovieRow
        data={movie}
        titleHref={`/${movie.movieId}`}
      />
    </Col>
  ))
}

export default MovieList
