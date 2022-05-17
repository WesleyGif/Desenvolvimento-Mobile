import React from 'react'
import { useTheme } from 'styled-components/native'
import { FontAwesome } from '@expo/vector-icons'

import { Product } from '../../types'
import { ProductCardBase } from '../ProductCardBase'
import RatingStars from '../RatingStars'

interface ProductCardShopProps {
  product: Product
}

/**
 * Card para navegação da loja.
 * Exibe o rating e funcionalidade para favoritar.
 * @param props product
 * @returns JSX.Element
 */
function ProductCardShop (props: ProductCardShopProps) {
  const theme = useTheme()
  const { rating, isFavorite } = props.product
  return (
    <ProductCardBase product={props.product}>
      <RatingStars rating={rating ?? 0} width={'40%'} size={18} maxWidth={'96px'}/>
        {isFavorite
          ? (<FontAwesome name={'heart'} size={24} color={theme.colors.primary} />)
          : (<FontAwesome name={'heart-o'} size={24} color={theme.colors.primary} />)
        }
    </ProductCardBase>
  )
}

export default ProductCardShop
