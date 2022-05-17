import styled from 'styled-components/native'

export const Container = styled.View`
width: 200px;
margin-top: 15px;`

export const StyledTextInput = styled.TextInput`
border: 2px;
padding: 4px;
font-size : 18px;
font-family:  ${props => props.theme.fonts.regular} ;
`
