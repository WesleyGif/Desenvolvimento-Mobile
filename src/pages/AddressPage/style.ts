import styled from 'styled-components/native'

export const StyledTextInput = styled.TextInput`
    border: 2px;
    padding: 4px;
    width: 80%;
    padding: 4px;
    margin-left: auto;
    margin-right: auto;
    font-size : 18px;
    font-family: ${props => props.theme.fonts.regular};
`

export const LinkText = styled.Text`
text-align: center;
margin-top:10px;
font-size:15px;
font-weight: bold;
color:blue;
text-decoration:underline;
text-decoration-color:blue;`
