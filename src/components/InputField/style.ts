import styled from 'styled-components/native'

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
