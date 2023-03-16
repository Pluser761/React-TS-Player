import React from 'react'
import { type PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { type Movie } from 'shared/api'
import { Card, type CardProps } from 'antd'

import styles from './styles.module.scss'

export type MovieCardProps = PropsWithChildren<{
  data?: Movie
  titleHref?: string
}> & CardProps

export const MovieCard = ({
  data,
  titleHref,
  children,
  ...cardProps
}: MovieCardProps): JSX.Element | null => {
  if ((data == null) && !(cardProps.loading ?? false)) return null

  return (
    <Card
      title={`Movie#${cardProps.loading ?? false ? '' : data?.movieId ?? ''}`}
      className={styles.root}
      {...cardProps}
    >
      {(titleHref != null) ? <Link to={titleHref}>{data?.title}</Link> : data?.title}
      {children}
    </Card>
  )
}
