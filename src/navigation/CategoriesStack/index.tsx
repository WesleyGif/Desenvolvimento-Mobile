import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import { Link } from '@react-navigation/native'

import { CategoriesStackParamList, CategoriesStackScreenProps } from '../types'
import { useTheme } from 'styled-components/native'
import { createStackScreenOption } from '../common'

const CategoriesStack = createStackNavigator<CategoriesStackParamList>()

const DummyComponent = ({ route }: CategoriesStackScreenProps<keyof CategoriesStackParamList>) => {
  const urlBase = '/Main/Categories/'
  const routeKeys:CategoriesStackScreenProps<keyof CategoriesStackParamList>['route']['name'][] =
  ['CategoriesList', 'CategoriesShop', 'CategoriesProduct']
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

function CategoriesStackComponent () {
  const theme = useTheme()
  const screenOptions = createStackScreenOption(theme)
  return (
    <CategoriesStack.Navigator screenOptions={screenOptions}>
      <CategoriesStack.Screen name='CategoriesList' component={DummyComponent}/>
      <CategoriesStack.Screen name='CategoriesShop' component={DummyComponent}/>
      <CategoriesStack.Screen name='CategoriesProduct' component={DummyComponent}/>
    </CategoriesStack.Navigator>
  )
}

export default CategoriesStackComponent
