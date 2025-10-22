import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const exerciseDetails = () => {
  const item = useLocalSearchParams() as Record<string, string>;
  const router = useRouter();
  console.log(item);
  // console.log("Exercise Details Item:", item);
  return (
    <ScrollView className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item?.gifUrl || "https://via.placeholder.com/150" }}
          className="rounded-b-[40px]"
          style={{
            width: widthPercentageToDP(100),
            height: heightPercentageToDP(50),
          }}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute top-1 right-0 mx-2 mt-4 rounded-full bg-black"
        >
          <Ionicons
            name="close-circle-outline"
            size={heightPercentageToDP(4)}
          />
        </TouchableOpacity>
      </View>
      <View className="mt-4 space-y-2 mx-4 mb-10">
        <Text
          style={{ fontSize: heightPercentageToDP(3.5) }}
          className="font-semibold text-black tracking-wide"
        >
          {item?.name}{" "}
        </Text>
        <Text
          style={{ fontSize: heightPercentageToDP(2.2) }}
          className="text-gray-700 mt-2"
        >
          Equipment: <Text className="font-bold">{item?.equipments} </Text>
        </Text>
        <Text
          style={{ fontSize: heightPercentageToDP(2.2) }}
          className="text-gray-700"
        >
          Secondary Muscles:{" "}
          <Text className="font-bold">{item?.secondaryMuscles} </Text>
        </Text>
        <Text
          style={{ fontSize: heightPercentageToDP(2.2) }}
          className="text-gray-700"
        >
          Target Muscle:{" "}
          <Text className="font-bold">{item?.targetMuscles} </Text>
        </Text>
        <Text
          style={{ fontSize: heightPercentageToDP(3) }}
          className="text-gray-700 mt-2"
        >
          Instructions
        </Text>
        {item?.instructions
          ?.split(".")
          .filter((step) => step.trim())
          .map((step, index) => (
            <Text
              key={index}
              style={{ fontSize: heightPercentageToDP(2) }}
              className="text-gray-600 tracking-wide mb-1"
            >
              {step.trim()}
            </Text>
          ))}
      </View>
    </ScrollView>
  );
};

export default exerciseDetails;
