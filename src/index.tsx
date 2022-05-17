import { registerRootComponent } from 'expo'
import React from 'react'
import { View, Text } from 'react-native'
import { useFonts, Roboto_400Regular, Roboto_400Regular_Italic, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { ThemeProvider } from 'styled-components/native'

import Routes from './navigation'
import theme from './themes'

function App () {
  const [loaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold
  })
  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 48 }}>Carregando....</Text>
      </View>
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}
registerRootComponent(App)
