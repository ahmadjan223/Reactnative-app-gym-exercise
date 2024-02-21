import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Home = () => {
  return (
    <SafeAreaView>
        <StatusBar style="dark"/>
        <View className='flex-row justify-between items-center mx-5'>
            <View className="space-y-2">
                <Text
                style={{fontSize:hp(4.5)}}
                className="font-bold tracking-wider text-neutral-700"
                >READY TO</Text>
                <Text
                style={{fontSize:hp(4.5)}}
                className="font-bold tracking-wider text-rose-500"
                >WORKOUT</Text>
            </View>
            <View className="flex justify-center items-center space-y-2">
                <Image 
                className="rounded-full "
                style={{height:hp(6), width:hp(6)}} source={require('../assets/icon.png')}></Image>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home