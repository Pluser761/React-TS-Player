import React from 'react'
import { type PropsWithChildren, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import { Row } from 'antd'
import { type Movie } from 'shared/api'

import styles from './styles.module.scss'

export type MovieRowProps = PropsWithChildren<{
  data: Movie
  titleHref?: string
  before?: ReactNode
}>

export const MovieRow = ({ data, before, titleHref }: MovieRowProps): JSX.Element => {
  const title = (titleHref === undefined)
    ? (
        data.title
      )
    : (
    <Link to={titleHref}>{data.title}</Link>
      )

  return (
    <Row className={cn(styles.root)}>
      {before}
      {title}
    </Row>
  )
}
