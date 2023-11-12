import React, { useEffect } from 'react'
import { View, Text, Pressable, Button, ActivityIndicator } from 'react-native'
import { Link, useRouter } from 'expo-router'

const Page = () => {
  const router = useRouter()
  return (
      <View>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eum explicabo dolorem quidem, laborum reprehenderit harum error. A quod reiciendis eum laborum, et temporibus ducimus sint maiores quaerat nostrum optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis, tempore vel cum quasi magni recusandae architecto officiis consectetur sit nesciunt quod ducimus velit cumque voluptatem eligendi iure. Dolores, hic.</Text>
        <Link href={'/(tabs)/(one)/one'} replace asChild>
          <Button title='Login' />
        </Link>
      </View>
  )
}

export default Page