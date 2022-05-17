import React from 'react'

import {
  Container,
  Column,
  Row,
  RowCenter,
  RowTop,
  Title,
  Caption,
  Price,
  OldPrice,
  StyledImage,
  ColumnBig,
  ColumnSmall
} from './styles'
import { Product } from '../../types'

export interface ProductCardBaseProps {
  product: Product
  children: React.ReactNode
}

export const productDummy = {
  title: 'Top Coat Camuflagem Nude Pink 12 mL',
  id: '1026-2704',
  price: 6.00,
  oldPrice: 10,
  rating: 2,
  isFavorite: true,
  imageURL: 'https://www.invilaunhas.com.br/media/products/2704_4a38ebbaada2d9cfb048cab67b4cb225.jpg'
}

/**
 * Base para o card dos produtos e do meu pedido
 * @param props product e children
 * @returns JSX.Element
 */
export function ProductCardBase (props: ProductCardBaseProps) {
  const {
    id,
    title,
    imageURL,
    price,
    oldPrice
  } = props.product
  return (
    <Container>
      <Row>
        <StyledImage resizeMode='cover'
          source={{ uri: imageURL }}
        />
      <Column>
        <RowTop>
          <ColumnBig>
            <Title>{title}</Title>
            <Caption>Cód: {id}</Caption>
          </ColumnBig>
          <ColumnSmall>
            <Price>{price.toFixed(2)}</Price>
            {oldPrice && <OldPrice>{oldPrice.toFixed(2)}</OldPrice>}
          </ColumnSmall>
        </RowTop>
        <RowCenter>
          {props.children}
        </RowCenter>
      </Column>
      </Row>
    </Container>
  )
}

export default ProductCardBase
