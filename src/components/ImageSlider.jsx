import { View, Text,Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
const ImageSlider = () => {
  return (
    <View
    // style={{width:widthPercentageToDP(100), height:heightPercentageToDP(25) }}
    className="justify-center items-center p-6 "
    >
      <Image
      className="rounded-3xl"
      style={{width:widthPercentageToDP(100)-70, height:heightPercentageToDP(25)}}
      source={require('../assets/slide1.png')} ></Image>
    </View>
  )
}
export default ImageSlider