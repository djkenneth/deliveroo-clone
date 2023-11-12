import FontAwesome from '@expo/vector-icons/FontAwesome'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { useColorScheme, TouchableOpacity } from 'react-native'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

// Componenets
import CustomHeader from '../components/CustomHeader'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

export const unstable_settings = {
  initialRouteName: 'index'
}

export default function RootLayoutNav() {
  const navigation = useNavigation()
  return (
      <BottomSheetModalProvider>
        <Stack>
              <Stack.Screen name='index' options={{
                header: () => <CustomHeader />
              }} />
              <Stack.Screen name='(modal)/filter' options={{ 
                presentation: 'modal',
                headerTitle: 'Filter',
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: Colors.lightGray,
                },
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='close-outline' size={28} color={Colors.primary} />
                  </TouchableOpacity>
                )
              }} />
              {/* <Stack.Screen name='register' options={{ headerTitle: 'Register', headerShown: true }} /> */}
              {/* <Stack.Screen name='(tabs)' options={{ headerShown: false }} /> */}
        </Stack>
      </BottomSheetModalProvider>
  )
}