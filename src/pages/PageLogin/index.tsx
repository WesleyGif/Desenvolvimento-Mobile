import * as React from 'react'
import { Linking } from 'react-native'
import { StyledTextInput, StyledEnter, Container, StyledImage, Content, StyledButton, LinkText, HeaderView } from './style'

function Login () {
  const [value, setvalue] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <Container>
      <HeaderView />
          <StyledImage
          source={require('../../assets/logo.png')} />
        <Content>Usuario:</Content>
        <StyledTextInput onChangeText={text => setvalue(text)} // Ele permite fazer a inclusão do texto no local
            placeholder=" Usuario " // Ele deixa como exemplo o que tem que fazer
            value = {value}
            />
        <Content>senha:</Content>
        <StyledTextInput onChangeText={text => setPassword(text)}
                placeholder='Senha'
                value ={password}/>
            <StyledButton>
                <StyledEnter>
                    Entrar
                </StyledEnter>
             </StyledButton>
            <LinkText
                onPress={() => {
                  Linking.openURL('https://github.com/WesleyGif')
                } }>
                Cadastre-se
            </LinkText>
            <LinkText
                onPress={() => {
                  Linking.openURL('https://github.com')
                } }>
                Esqueceu sua senha?
            </LinkText>
        </Container>
  )
}
export default Login
