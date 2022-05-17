import React, { useState } from 'react'
import { View, Linking } from 'react-native'
import { StyledUrl, StyledText, HeaderView, StyledButton, StyledEnter } from './styled'
import InputField from '../../components/InputField'

// interface Props {
//   nameArea : string
// }
// const TittleArea = (props: Props) => {
//   return (
//     <Text> { props.nameArea } </Text>
//   )
// }
function Register () {
  const [name, setName] = React.useState('')
  const [cpf, setCpf] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const urlPolitics = 'https://www.invilaunhas.com.br/home/politica_de_privacidade_e_seguranca'
  const urlTermUse = 'https://www.invilaunhas.com.br/home/termos_e_condicoes_de_uso'

  return (
        <View>
          <HeaderView />
          <InputField label='Nome' value={name} onChangeText={setName} placeholder='Escreva seu nome aqui '/>
          <InputField label='Cpf' value={cpf} onChangeText={setCpf} placeholder='000.000.000-00'/>
          <InputField label='Email' value={email} onChangeText={setEmail} placeholder='examplo@invila.com'/>
          <InputField label='Celular/Whatsapp' value={phone} onChangeText={setPhone} placeholder='(XX) 00000-0000'/>
            <StyledText>
                Ao confirmar o cadastro, você aceita nosssos {''}
                <StyledUrl onPress={() => Linking.openURL(urlTermUse)}>
                Termos de Serviço {''}
                </StyledUrl>
                e concorda com nossa {''}
                <StyledUrl onPress={() => Linking.openURL(urlPolitics)}>
                       Política de privacidade.
                </StyledUrl>
            </StyledText>
            <StyledButton>
              <StyledEnter>
                Confirmar
              </StyledEnter>
            </StyledButton>
        </View>
  )
}

export default Register
