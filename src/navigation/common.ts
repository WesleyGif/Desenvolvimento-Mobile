import { StackNavigationOptions } from '@react-navigation/stack'
import { DefaultTheme } from 'styled-components/native'
import {
  CategoriesStackParamList,
  CategoriesStackScreenProps,
  FavoritesStackParamList,
  FavoritesStackScreenProps,
  HomeStackParamList,
  HomeStackScreenProps,
  ProfileStackParamList,
  ProfileStackScreenProps,
  ShoppingCartStackParamList,
  ShoppingCartStackScreenProps
} from './types'

type ScreenProps =
HomeStackScreenProps<keyof HomeStackParamList> |
FavoritesStackScreenProps<keyof FavoritesStackParamList> |
CategoriesStackScreenProps<keyof CategoriesStackParamList> |
ProfileStackScreenProps<keyof ProfileStackParamList> |
ShoppingCartStackScreenProps<keyof ShoppingCartStackParamList>

export function createStackScreenOption (theme: DefaultTheme) {
  return ({ route, navigation }: ScreenProps): StackNavigationOptions => ({
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontFamily: theme.fonts.bold,
      fontSize: parseInt(theme.fonts.sizeHeading)
    },
    headerStyle: {
      backgroundColor: theme.colors.primaryLight2
    }
  })
}
