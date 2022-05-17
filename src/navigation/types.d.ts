import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabsParamList>,
  Feedback: {
    message: string,
    type: 'success'|'error'
  }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
StackScreenProps<RootStackParamList, T>

export type MainTabsParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>,
  Favorites: NavigatorScreenParams<FavoritesStackParamList>,
  Categories: NavigatorScreenParams<CategoriesStackParamList>,
  Profile: NavigatorScreenParams<ProfileStackParamList>,
  ShoppingCart: NavigatorScreenParams<ShoppingCartStackParamList>
}

export type MainTabsScreenProps<T extends keyof MainTabsParamList> =
CompositeScreenProps<
  BottomTabScreenProps<MainTabsParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>

export type HomeStackParamList = {
  HomeShop: undefined,
  HomeProduct: undefined
}

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
CompositeScreenProps<
  StackScreenProps<HomeStackParamList, T>,
  MainTabsScreenProps<keyof MainTabsParamList>
>

export type FavoritesStackParamList = {
  FavoritesShop: undefined,
  FavoritesProduct: undefined
}

export type FavoritesStackScreenProps<T extends keyof FavoritesStackParamList> =
CompositeScreenProps<
  StackScreenProps<FavoritesStackParamList, T>,
  MainTabsScreenProps<keyof MainTabsParamList>
>

export type CategoriesStackParamList = {
  CategoriesList: undefined,
  CategoriesShop: undefined,
  CategoriesProduct: undefined
}

export type CategoriesStackScreenProps<T extends keyof CategoriesStackParamList> =
CompositeScreenProps<
  StackScreenProps<CategoriesStackParamList, T>,
  MainTabsScreenProps<keyof MainTabsParamList>
>

export type ProfileStackParamList = {
  Login: undefined,
  Forgot: undefined,
  SignIn: undefined,
  MyProfile: undefined,
  Address: undefined,
  Orders: undefined,
  MyOrder: undefined
}

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> =
CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, T>,
  MainTabsScreenProps<keyof MainTabsParamList>
>

export type ShoppingCartStackParamList ={
  MyShoppingCart: undefined,
  Confirm: undefined
}

export type ShoppingCartStackScreenProps<T extends keyof ShoppingCartStackParamList> =
CompositeScreenProps<
  StackScreenProps<ShoppingCartStackParamList, T>,
  MainTabsScreenProps<keyof MainTabsParamList>
>

/**
 * Tipagem Global para Links
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
