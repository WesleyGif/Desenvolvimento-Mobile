import React from 'react'
import { FontAwesome5, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

import { Circle, Column, Container, HorizontalBar, HorizontalBarGray, HorizontalBarPrimary, StyledText } from './styles'
import { useTheme } from 'styled-components/native'

interface OrderStatusBarProps {
  successLevel: 0 | 1 | 2 | 3 | 4
}

interface OrderStatusStep {
  IconPackage: typeof FontAwesome5 | typeof MaterialCommunityIcons | typeof FontAwesome
  iconName: 'file-invoice-dollar' | 'shopping-basket' | 'truck-fast' | 'check-circle'
  message: string
}

const orderSteps: OrderStatusStep[] = [
  {
    IconPackage: FontAwesome5,
    iconName: 'file-invoice-dollar',
    message: 'Pedido Recebido'
  },
  {
    IconPackage: FontAwesome5,
    iconName: 'shopping-basket',
    message: 'Em Separação'
  },
  {
    IconPackage: MaterialCommunityIcons,
    iconName: 'truck-fast',
    message: 'Enviado'
  },
  {
    IconPackage: FontAwesome,
    iconName: 'check-circle',
    message: 'Concluído'
  }
]

/**
 * Barra de ícones representando o acompanhamento do pedido
 * @param props successLevel: número de 0 a 4. Representa quantas
 *                            etapas já foram concluídas
 * @returns JSX.Element
 */
function OrderStatusBar (props: OrderStatusBarProps) {
  const { successLevel } = props
  const theme = useTheme()
  const steps = orderSteps.map((step, index) => {
    const isSuccess = (successLevel > index)
    const { IconPackage, iconName, message } = step
    return (
      <Column key={index}>
        <IconPackage name={iconName} size={24} color={isSuccess ? theme.colors.primary : theme.colors.gray} />
        <Circle isSuccess={isSuccess} />
        <StyledText isSuccess={isSuccess}>{message}</StyledText>
      </Column>
    )
  })
  return (
    <Container>
      <HorizontalBar>
        <HorizontalBarPrimary successLevel={successLevel}/>
        <HorizontalBarGray successLevel={successLevel} />
      </HorizontalBar>
      {steps}
    </Container>
  )
}

export default OrderStatusBar
