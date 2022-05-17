import * as React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Container, Content } from './style'

interface SendCodeProps{
    message:string;
}

function SendCode (props: SendCodeProps) {
  return (
        <Container>
            <Content>{props.message}</Content>
            <FontAwesome name="check-square" size={48} color="white" />
        </Container>

  )
}

export default SendCode
