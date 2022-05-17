import React from 'react'
import { Product } from '../../types'

import { Amount, Caption, Column, Container, Price, Row, Title } from './styles'

interface ProductItemProps {
  product: Product
  isLast: boolean
}

function ProductItem (props: ProductItemProps) {
  const {
    id,
    title,
    price,
    amount
  } = props.product
  return (
    <Container isLast={props.isLast}>
      <Row>
        <Amount>{amount ?? 0}</Amount>
        <Column>
          <Title>{title}</Title>
          <Caption>Cód. {id}</Caption>
        </Column>
        <Price>{price.toFixed(2)}</Price>
      </Row>
    </Container>
  )
}

export default ProductItem
