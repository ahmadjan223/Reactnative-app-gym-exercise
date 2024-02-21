import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _Layout = () => {
  return (
    <View>
        <Stack screenOptions={{headerShown:false}}></Stack>
    </View>
  )
}

export default _Layout