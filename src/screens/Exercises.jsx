import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Exercises = ({route,navigation}) => {
  const num = route.params;
  return (
    <View>
      <Text>{num}</Text>
      <Text>{num}</Text>
      <Text>{num}</Text>
      <Text>{num}</Text>
      <TouchableOpacity
      onPress={()=>{navigation.goBack()}}
      ><Text style={{fontSize:heightPercentageToDP(5), backgroundColor:'green'}}>
        hello jee</Text></TouchableOpacity>
    </View>
  )
}

export default Exercises