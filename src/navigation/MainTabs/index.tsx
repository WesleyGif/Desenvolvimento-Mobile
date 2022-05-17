import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

import { MainTabsParamList } from '../types'
import HomeStackComponent from '../HomeStack'
import FavoritesStackComponent from '../FavoritesStack'
import CategoriesStackComponent from '../CategoriesStack'
import ProfileStackComponent from '../ProfileStack'
import ShoppingCartStackComponent from '../ShoppinCartStack'

const MainTabs = createBottomTabNavigator<MainTabsParamList>()

function MainTabsComponent () {
  const theme = useTheme()
  return (
    <MainTabs.Navigator
      screenOptions={
        ({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: theme.colors.black,
          tabBarInactiveTintColor: theme.colors.black,
          tabBarActiveBackgroundColor: theme.colors.primaryLight2,
          tabBarInactiveBackgroundColor: theme.colors.primaryLight2,
          tabBarLabelStyle: {
            fontSize: parseInt(theme.fonts.sizeCaption),
            fontFamily: theme.fonts.regular
          },
          tabBarIcon: ({ color, size }) => {
            let iconName: React.ComponentProps<typeof Feather>['name']

            switch (route.name) {
              case 'Home':
                iconName = 'home'
                break
              case 'Favorites':
                iconName = 'heart'
                break
              case 'Categories':
                iconName = 'menu'
                break
              case 'Profile':
                iconName = 'user'
                break
              case 'ShoppingCart':
                iconName = 'shopping-cart'
                break
            }
            return <Feather name={iconName} size={size} color={color} />
          }
        })
      }
    >
      <MainTabs.Screen name='Home' component={HomeStackComponent} options={{ title: 'Início' }}/>
      <MainTabs.Screen name='Favorites' component={FavoritesStackComponent} options={{ title: 'Favoritos' }}/>
      <MainTabs.Screen name='Categories' component={CategoriesStackComponent} options={{ title: 'Categorias' }}/>
      <MainTabs.Screen name='Profile' component={ProfileStackComponent} options={{ title: 'Minha Conta' }}/>
      <MainTabs.Screen name='ShoppingCart' component={ShoppingCartStackComponent} options={{ title: 'Carrinho' }}/>
    </MainTabs.Navigator>
  )
}

export default MainTabsComponent
