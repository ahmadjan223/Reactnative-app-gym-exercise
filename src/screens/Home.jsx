import { View, Text, Image, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white flex " edges={['top']}>
      <StatusBar style="dark" />
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-rose-500"
          >
            WORKOUT
          </Text>
        </View>
        <View className="flex justify-center items-center space-y-2">
          <Image
            className="rounded-full "
            style={{ height: hp(6), width: hp(6) }}
            source={require("../assets/icon.jpg")}
          ></Image>
          <View
            className="bg-neutral-200 justify-center items-center rounded-full flex border-[3px] border-neutral-300"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <Icon name="notifications" size={hp(3)} color="grey" />
          </View>
        </View>
      </View>
      {/* slider carousel */}
      <View className="flex my-8">
        <ImageSlider />
      </View>
      {/* <Button
        onPress={() => navigation.navigate("BodyParts")}
        title="press me"
      ></Button> */}
      {/* body parts list */}
      <View className="flex-1">
        <BodyParts></BodyParts>
      </View>
    </SafeAreaView>
  );
};

export default Home;