import { View, Text } from 'react-native'
import React from 'react'
import  { Drawer } from 'expo-router/drawer'

const Layout = () => {
  return (
    <Drawer>
        <Drawer.Screen name='page2' options={{
            headerTitle: 'My NewsFeed',
            drawerLabel: 'News'
        }} />
    </Drawer>
  )
}

export default Layout