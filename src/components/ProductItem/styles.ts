import styled from 'styled-components/native'

type ContainerProps = {
  isLast?: boolean
}
export const Container = styled.View<ContainerProps>`
  width: 90%;
  padding: 8px;
  border-bottom-width: ${props => props.isLast ? '1px' : 0};
  border-bottom-color: #000000;
  border-top-width: 1px;
  border-top-color: #000000;
`
export const Row = styled.View`
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  /* align-items: center; */
`

export const Price = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fonts.sizeSmall};
  color: ${props => props.theme.colors.primary};
`

export const Amount = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fonts.sizeSmall};
`
export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fonts.sizeRegular};
  margin-bottom: 8px;
`

export const Caption = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fonts.sizeCaption};
  color: ${props => props.theme.colors.gray};
`

export const Column = styled.View`
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 8px;
`
