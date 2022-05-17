import styled from 'styled-components/native'

export const Container = styled.View`
width: 100%;
margin-top: 15px;
`
export const HeaderView = styled.View`
height: 100px;
width:100%;
background:${props => props.theme.colors.primaryLight1};
`

export const StyledImage = styled.Image`
width: 30%;
height: 50%;
margin-left: auto;
margin-right: auto;
 `

export const StyledTextInput = styled.TextInput`
margin-bottom: 18px;
border: 2px;
padding: 4px;
width: 50%;
margin-left: auto;
margin-right: auto;
font-size : 18px;
font-family: ${props => props.theme.fonts.regular};
`
export const Content = styled.Text`
font-size: 10px;
margin-left: auto;
margin-right: auto;
`

export const StyledButton = styled.TouchableOpacity`
padding: 20px;
width: 300px;
margin-left: auto;
margin-right: auto;
background-color: ${props => props.theme.colors.primaryLight1}; /* não está sendo feito a chamada para dentro do Button*/
`
export const StyledEnter = styled.Text`
text-align: center;`

export const LinkText = styled.Text`
text-align: center;
margin-top:10px;
font-size:15px;
font-weight: bold;
color:blue;
text-decoration:underline;
text-decoration-color:blue;`
