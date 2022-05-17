import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import { Link } from '@react-navigation/native'

import { FavoritesStackParamList, FavoritesStackScreenProps } from '../types'
import { useTheme } from 'styled-components/native'
import { createStackScreenOption } from '../common'

const FavoritesStack = createStackNavigator<FavoritesStackParamList>()

const DummyComponent = ({ route }: FavoritesStackScreenProps<keyof FavoritesStackParamList>) => {
  const urlBase = '/Main/Favorites/'
  const routeKeys:FavoritesStackScreenProps<keyof FavoritesStackParamList>['route']['name'][] =
  ['FavoritesShop', 'FavoritesProduct']
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

function FavoritesStackComponent () {
  const theme = useTheme()
  const screenOptions = createStackScreenOption(theme)
  return (
    <FavoritesStack.Navigator screenOptions={screenOptions}>
      <FavoritesStack.Screen name='FavoritesShop' component={DummyComponent}/>
      <FavoritesStack.Screen name='FavoritesProduct' component={DummyComponent}/>
    </FavoritesStack.Navigator>
  )
}

export default FavoritesStackComponent
