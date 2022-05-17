import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Container, Paragraph } from './styles'

import type { HomeStackScreenProps } from '../../navigation/types'

type Props = HomeStackScreenProps<'HomeShop'>

function HomePage ({ navigation }: Props) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('HomeProduct')}>
        <Paragraph>Go To</Paragraph>
      </TouchableOpacity>
      <Paragraph>Home</Paragraph>
    </Container>
  )
}

export default HomePage
