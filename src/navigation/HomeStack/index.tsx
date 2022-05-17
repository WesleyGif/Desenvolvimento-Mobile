import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import { Link } from '@react-navigation/native'

import { HomeStackParamList, HomeStackScreenProps } from '../types'
import { useTheme } from 'styled-components/native'
import { createStackScreenOption } from '../common'

const HomeStack = createStackNavigator<HomeStackParamList>()

const DummyComponent = ({ route }: HomeStackScreenProps<keyof HomeStackParamList>) => {
  const urlBase = '/Main/Home/'
  const routeKeys:HomeStackScreenProps<keyof HomeStackParamList>['route']['name'][] =
  ['HomeShop', 'HomeProduct']
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

function HomeStackComponent () {
  const theme = useTheme()
  const screenOptions = createStackScreenOption(theme)
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name='HomeShop' component={DummyComponent}/>
      <HomeStack.Screen name='HomeProduct' component={DummyComponent}/>
    </HomeStack.Navigator>
  )
}

export default HomeStackComponent
