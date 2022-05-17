import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackParamList } from './types'
import MainTabsComponent from './MainTabs'
import { NavigationContainer } from '@react-navigation/native'

const RootStack = createStackNavigator<RootStackParamList>()

function Routes () {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='Main' component={MainTabsComponent}/>
        <RootStack.Screen name='Feedback' component={View}/>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
