import { View, Text, FlatList, TouchableOpacity, Image, Modal } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ModalExerciseDetails from "./ModalExerciseDetails";

const ExerciseList = ({ data }) => {
  const [ModalVisible,setModalVisible] = useState(false);
  const [item,setitem] = useState([]);
  return (
    <View>
      {ModalVisible && <ModalExerciseDetails item = {item} />}
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <ExerciseCard index={index} item={item} />
        )}
      />
    </View>
  );
};
export default ExerciseList;

const ExerciseCard = ({ index, item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity 
      onPress={()=>{navigation.navigate('ExerciseDetails',item)}}
      className="flex py-3 space-y-2">
        <View
        className=" bg-neutral-200 shadow rounded-[25px] overflow-hidden"
        >
          <Image
            source={{uri:item.gifUrl}}
            contentFit='cover'
            style={{ width: wp(44), height: wp(52),borderRadius:300}}
            className="rounded-[25px]"
          ></Image>
        </View>
          <Text
          style={{fontSize:hp(1.7)}}
          className="text-neutral-700 font-semibold ml-1 tracking-wide"
          >
            {item?.name?.length>20? item.name.slice(0,20)+'...': item.name } 

          </Text>
      </TouchableOpacity>
    </View>
  );
};
