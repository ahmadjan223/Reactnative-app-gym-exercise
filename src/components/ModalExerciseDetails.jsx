import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-virtualized-view";

const ModalExerciseDetails = ({ route, navigation }) => {
  const item = route.params;
  console.log("dat is fetched", item);
  return (
    <View className="flex-1 flex ">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        ></Image>
      </View>
      <TouchableOpacity
        style={{
          height: hp(5.5),
          width: hp(5.5),
          marginTop: hp(8),
          right: hp(1),
        }}
        className="mx-2 absolute rounded-full mt-2 right-0"
        onPress={() => navigation.goBack()}
      >
        <Icon name="closecircle" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>
      <ScrollView className="mx-4 space-y-2 mt-3 mb-3">
        <Text
          style={{ fontSize: hp(3.5) }}
          className="font-semibold text-neutral-800 tracking-wide my-1"
        >
          {" "}
          {item.name}
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className=" text-neutral-800 tracking-wide my-1"
        >
          {" "}
          Equipment{" "}
          <Text className="font-bold text-neutral-800">{item?.equipment}</Text>
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className=" text-neutral-800 tracking-wide my-1"
        >
          {" "}
          Secondary Muscles{" "}
          <Text className="font-bold text-neutral-800">
            {item?.secondaryMuscles}
          </Text>
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className=" text-neutral-800 tracking-wide my-1"
        >
          {" "}
          Instructions{" "}
          <Text className="font-bold text-neutral-800">{item?.target}</Text>
        </Text>
        <Text
          style={{ fontSize: hp(3.5) }}
          className="font-semibold text-neutral-800 mx-4 tracking-wide my-1"
        >
          Instruction
        </Text>
        {item.instructions.map((instruction, index) => {
          return (
            <Text
              key={instruction}
              style={{ fontSize: hp(1.7) }}
              className="text-neutral-800"
            >
              {instruction}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ModalExerciseDetails;
