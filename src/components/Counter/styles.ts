import styled from 'styled-components/native'

interface ContainerProps {
  width?: string
  maxWidth?: string
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  width: ${props => props.width ?? '100%'};
  max-width: ${props => props.maxWidth ?? '100%'};
`

interface StyledAmountProps {
  size: 'regular'| 'small'
}

export const StyledAmount = styled.Text<StyledAmountProps>`
  font-size: ${props => (
    (props.size === 'regular')
    ? props.theme.fonts.sizeRegular
    : props.theme.fonts.sizeSmall
  )};
  font-family: ${props => props.theme.fonts.regular};
`
