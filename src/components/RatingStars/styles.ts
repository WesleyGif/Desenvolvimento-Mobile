import styled from 'styled-components/native'

interface ContainerProps {
  maxWidth?: string
  width?: string
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%'};
  width: ${props => props.width ? props.width : '100%'}
`
