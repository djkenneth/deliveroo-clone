import React, { useEffect } from 'react'
import { View, Text, Pressable, Button, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router'

const Index = () => {
  const router = useRouter()

  return (
    // <SafeAreaView>
      <View>
        {/* <Text>Index</Text> */}
        {/* <Button onPress={() => router.push('/register')} title='Open Register' /> */}

        {/* Link Navigation */}
        <Link href={'/(tabs)/(one)/one'} replace asChild>
          <Button title='Login' />
        </Link>

        {/* {todosQuery.isLoading ? <ActivityIndicator size={'large'} /> : null}
        {todosQuery.isError ? <Text>Error</Text> : null} */}
      </View>
    // </SafeAreaView>
  )
}

export default Index