import React, { useState } from 'react'
import { useTheme } from 'styled-components/native'
import { FontAwesome } from '@expo/vector-icons'

import { Product } from '../../types'
import { ProductCardBase } from '../ProductCardBase'
import Counter from '../Counter'

interface ProductCardOrderProps {
  product: Product
}

/**
 * Card para as páginas de pedido, possui um contador e
 * um botão de exclusão
 * @param props product
 * @returns JSX.Element
 */
function ProductCardOrder (props: ProductCardOrderProps) {
  const theme = useTheme()
  const [amount, setAmount] = useState(props.product.amount ?? 0)
  return (
    <ProductCardBase product={props.product}>
      <Counter
        amount={amount}
        size={24}
        width={'25%'}
        maxWidth={'80px'}
        fontSize={'small'}
        increment={() => setAmount(amount + 1)}
        decrement={() => setAmount(amount - 1)}
      />
      <FontAwesome name='trash-o' size={24} color={theme.colors.gray} />
    </ProductCardBase>
  )
}

export default ProductCardOrder
