import React from 'react'
import { Feather } from '@expo/vector-icons'

import { Container, StyledAmount } from './styles'

export interface CounterProps {
  amount: number
  size?: number
  fontSize?: 'regular'|'small'
  width?: string
  maxWidth?: string
  decrement: () => void
  increment: () => void
}

/**
 * Contador para quantidade de produtos
 * @param props amount, decrement e increment precisam ser definidos.
 *              Opcionais: fontSize default small;
 *                         size default 12
 * @returns JSX.Element
 */
function Counter (props: CounterProps) {
  return (
    <Container maxWidth={props.maxWidth} width={props.width}>
      <Feather
        name={'minus-circle'}
        color={'#000000'}
        size={props.size}
        onPress={props.decrement}
      />
      <StyledAmount size={props.fontSize ?? 'small'}>{props.amount}</StyledAmount>
      <Feather
        name={'plus-circle'}
        color={'#000000'}
        size={props.size}
        onPress={props.increment}
      />
    </Container>
  )
}

export default Counter
