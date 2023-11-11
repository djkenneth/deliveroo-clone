import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Link href={'/'} replace asChild>
        <Button title='Logout' />
      </Link>
      <Link href={'/(tabs)/(one)/details'} asChild>
        <Button title='Open Details' />
      </Link>
      <Link href={'/(tabs)/(one)/100'} asChild>
        <Button title='Hello 100' />
      </Link>
      <Link href={'/(tabs)/(one)/69'} asChild>
        <Button title='Hello 69' />
      </Link>
      <Link href={'/modal'} asChild>
        <Button title='Open Modal' />
      </Link>
    </View>
  )
}

export default Page