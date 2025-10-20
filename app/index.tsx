import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
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
          <View
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
          </View>
          <View>
            <TouchableOpacity
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
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default index;
