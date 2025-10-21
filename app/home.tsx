import BodyParts from "@/components/BodyParts";
import { ImageSlider } from "@/components/ImageSlider";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View className="flex flex-row justify-between items-center mx-5 mt-3">
          <View className="space-y-2">
            <Text
              style={{ fontSize: hp(4.5) }}
              className="text-black tracking-wide font-bold "
            >
              READY TO{" "}
            </Text>
            <Text
              style={{ fontSize: hp(4.5) }}
              className="text-rose-500 tracking-wide font-bold "
            >
              WORKOUT
            </Text>
          </View>
          <View className="flex justify-center items-center space-y-2">
            <Image
              source={require("@/assets/images/avatar.png")}
              style={{ width: hp(6), height: hp(6) }}
              className="rounded-xl"
            />
          </View>
        </View>

        {/* Image Slider */}
        <View className="mt-5">
          <ImageSlider />
        </View>

        {/* Body Parts */}
        <View className="mt-5">
          <BodyParts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
