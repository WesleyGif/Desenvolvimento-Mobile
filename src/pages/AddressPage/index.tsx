import React from 'react'
import { View, Text, Linking } from 'react-native'
import { LinkText } from './style'
import HeaderBackground from '../../components/HeaderBackground'

function Address () {
  return (
  <View>
    <HeaderBackground />
    <LinkText
      onPress={() => {
      }}>+ Adicionar Endereço</LinkText>
      <Text></Text>
  </View>
  )
}
export default Address
