import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import { Link } from '@react-navigation/native'

import { ShoppingCartStackParamList, ShoppingCartStackScreenProps } from '../types'
import { createStackScreenOption } from '../common'
import { useTheme } from 'styled-components/native'

const ShoppingCartStack = createStackNavigator<ShoppingCartStackParamList>()

const DummyComponent = ({ route }: ShoppingCartStackScreenProps<keyof ShoppingCartStackParamList>) => {
  const urlBase = '/Main/ShoppingCart/'
  const routeKeys:ShoppingCartStackScreenProps<keyof ShoppingCartStackParamList>['route']['name'][] =
  ['MyShoppingCart', 'Confirm']
  const result = routeKeys.filter(name => name !== route.name)
  return (
    <View>
      <Text>{route.name}</Text>
      <View>
        <Text>Rotas</Text>
        {result.map((name, index) => <Link to={urlBase + name} key={index}>{name}</Link>) }
      </View>
    </View>
  )
}

function ShoppingCartStackComponent () {
  const theme = useTheme()
  const screenOptions = createStackScreenOption(theme)
  return (
    <ShoppingCartStack.Navigator screenOptions={screenOptions}>
      <ShoppingCartStack.Screen name='MyShoppingCart' component={DummyComponent}/>
      <ShoppingCartStack.Screen name='Confirm' component={DummyComponent}/>
    </ShoppingCartStack.Navigator>
  )
}

export default ShoppingCartStackComponent
