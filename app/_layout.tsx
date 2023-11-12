import FontAwesome from '@expo/vector-icons/FontAwesome'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

// Componenets
import CustomHeader from '../components/CustomHeader'

export const unstable_settings = {
  initialRouteName: 'index'
}

export default function RootLayoutNav() {
  return (
      <BottomSheetModalProvider>
        <Stack>
              <Stack.Screen name='index' options={{
                header: () => <CustomHeader />
              }} />
              <Stack.Screen name='register' options={{ headerTitle: 'Register', headerShown: true }} />
              <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
              <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
        </Stack>
      </BottomSheetModalProvider>
  )
}