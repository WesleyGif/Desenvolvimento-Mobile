import styled from 'styled-components/native'

export const HeaderView = styled.View`
height: 100px;
width:100%;
background:${props => props.theme.colors.primaryLight1};
`
export const StyledTittle = styled.Text`
    margin-left: auto;
    margin-right: auto;
    margin-top: 35px;
    `
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
export const StyledText = styled.Text`
    font-size: ${props => props.theme.fonts.sizeCaption};
    text-align: center;
    margin-top: 15px;
    padding: 20px;
`
export const StyledUrl = styled.Text`
    font-size: ${props => props.theme.fonts.sizeCaption};
    color: ${props => props.theme.colors.link};
    font-family: ${props => props.theme.fonts.regular};
`
export const StyledButton = styled.TouchableOpacity`
margin-top: 15px;
padding: 20px;
width: 300px;
margin-left: auto;
margin-right: auto;
background-color: ${props => props.theme.colors.primaryLight1}; /* não está sendo feito a chamada para dentro do Button*/
`
export const StyledEnter = styled.Text`
text-align: center;`
