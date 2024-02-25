import { View, Text, TouchableOpacity,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import { fetchExercisesByBodypart } from '../../api/exerciseDb';
import { demoExercises } from '../constraints';
import { StatusBar } from 'expo-status-bar';
import Icon from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ExerciseList from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';
const Exercises = ({route,navigation}) => {
  const item = route.params;
  const [exercises,setExercises]=useState(demoExercises);
  useEffect(() => {
    if(item){
      getExercises(item.name);
    }
  }, [item]);
  const getExercises = async (bodyPart)=>{
    let data = await fetchExercisesByBodypart(bodyPart)
    console.log('get data',data)
    setExercises(data)
  }

  return (
    <ScrollView>
      <StatusBar style='light'></StatusBar>
      <Image 
      source={item.image}
      style={{width:wp(100),height:hp(45)}}
      className="rounded-b-[40px]"
      ></Image>
      <TouchableOpacity
      className="bg-rose-500 mx-4 absolute flex rounded-full pr-1 justify-center items-center"
      style={{height:hp(5.5), width:hp(5.5), marginTop:hp(7)}}
      onPress={()=>navigation.goBack()}
      >
        <Icon name="caret-back-outline" size={hp(4)} color="white"/>
      </TouchableOpacity>
        <View className="mx-4 space-y-3 mt-4">
          <Text
          style={{fontSize:hp(3)}}
          className="font-semibold text-neutral-700"
          >
            {item.name} exercises
          </Text>
          <View
          className="mb-10"
          >
            <ExerciseList data={exercises}></ExerciseList>
          </View>
        </View>
    </ScrollView>
  )
}

export default Exercises