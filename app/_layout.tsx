import React from 'react'
import { Stack } from 'expo-router'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
  })

const StackLayout = () => {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
              headerStyle: {
                  backgroundColor: '#10101E'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                  fontWeight: 'bold'
              }
          }}
          >
              <Stack.Screen name='index' options={{ headerTitle: 'Login', headerShown: true }} />
              <Stack.Screen name='register' options={{ headerTitle: 'Register', headerShown: true }} />
              <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
              <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
        </Stack>
      </QueryClientProvider>
    </>
  )
}

export default StackLayout