import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import { Link } from '@react-navigation/native'

import { ProfileStackParamList, ProfileStackScreenProps } from '../types'
import { useTheme } from 'styled-components/native'
import { createStackScreenOption } from '../common'

const ProfileStack = createStackNavigator<ProfileStackParamList>()

const DummyComponent = ({ route }: ProfileStackScreenProps<keyof ProfileStackParamList>) => {
  const urlBase = '/Main/Profile/'
  const routeKeys:ProfileStackScreenProps<keyof ProfileStackParamList>['route']['name'][] =
  ['Address', 'Forgot', 'Login', 'MyOrder', 'MyProfile', 'Orders', 'SignIn']
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

function ProfileStackComponent () {
  const theme = useTheme()
  const screenOptions = createStackScreenOption(theme)
  return (
    <ProfileStack.Navigator screenOptions={screenOptions}>
      <ProfileStack.Screen name='Address' component={DummyComponent}/>
      <ProfileStack.Screen name='Forgot' component={DummyComponent}/>
      <ProfileStack.Screen name='Login' component={DummyComponent}/>
      <ProfileStack.Screen name='MyOrder' component={DummyComponent}/>
      <ProfileStack.Screen name='MyProfile' component={DummyComponent}/>
      <ProfileStack.Screen name='Orders' component={DummyComponent}/>
      <ProfileStack.Screen name='SignIn' component={DummyComponent}/>
    </ProfileStack.Navigator>
  )
}

export default ProfileStackComponent
