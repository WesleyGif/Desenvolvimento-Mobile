import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
`

export const Paragraph = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fonts.sizeHeading};
`
