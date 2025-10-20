import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from "expo-router";


const index = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <Image
          className="w-full h-full absolute"
          source={require("../assets/images/welcome.png")}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", "#18181b"]}
          style={{ width: wp("100%"), height: hp("100%") }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
          className="flex justify-end pb-12 space-y-8"
        >
          <Animated.View entering={FadeInDown.delay(200).springify()}
            className="flex justify-center items-center"
          >
            <Text
              style={{ fontSize: hp(5) }}
              className="text-white font-bold tracking-wide"
            >
              Best <Text className="text-rose-400">Workout</Text>
            </Text>
            <Text
              style={{ fontSize: hp(5) }}
              className="flex justify-center items-center font-bold text-white tracking-wide"
            >
              for you
            </Text>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(400).springify()}>
            <TouchableOpacity
              onPress={() => router.replace("/home")}
              style={{ width: wp(60), height: hp(7) }}
              className=" bg-rose-500 flex justify-center items-center mx-auto border-white rounded-xl mt-5"
            >
              <Text
                style={{ fontSize: hp(3) }}
                className="text-white font-bold tracking-wide"
              >
                Get Started
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default index;
