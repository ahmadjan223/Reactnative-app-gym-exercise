import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function App() {
  return (
      <View className="flex-1 flex justify-end bg-slate-400">
        <StatusBar style='light'/>
          <Image className="h-full w-full absolute"  source={require('./src/assets/splash2.jpg')}/>
          <LinearGradient
          colors={['transparent','#18181B']}
          style={{width:wp(100),height:hp(70)}}
          start={{x:0.5,y:0}}
          end={{x:0.5,y:0.8}}
          className="flex justify-end pb-12 space-y-8"
          >
            <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center ">
              <Text style={{fontSize:hp(5)}} className="text-white font-bold tracking-wide">Best <Text className="text-rose-500">Workouts</Text></Text>
              <Text style={{fontSize:hp(5)}} className="text-white font-bold tracking-wide">For You</Text>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(200).springify()} className="flex items-center ">
              <TouchableOpacity 
              style={{height:hp(7),width:wp(80)}}
              className="bg-rose-500 flex items-center mx-auto rounded-full border-[2px] justify-center border-neutral-200"
              >
                <Text style={{fontSize:hp(3)}} className="text-white font-bold tracking-widest"> Get Started</Text>
              </TouchableOpacity>
            </Animated.View>
          </LinearGradient>
      </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});