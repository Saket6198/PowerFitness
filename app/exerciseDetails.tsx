import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const exerciseDetails = () => {
  const item = useLocalSearchParams() as Record<string, string>;
  const router = useRouter();
  const [isVisible, setIsVisible] = React.useState(true);

  const handleClose = () => {
    setIsVisible(false);
    // Small delay to allow modal animation to complete before navigation
    setTimeout(() => {
      router.back();
    }, 300);
  };

  // console.log(item);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={handleClose}
      onBackButtonPress={handleClose}
      onSwipeComplete={handleClose}
      swipeDirection={["down"]}
      propagateSwipe={true}
      style={{ margin: 0 }}
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <View className="flex-1 bg-white rounded-t-[40px] mt-12">
        <ScrollView className="flex-1">
          <TouchableOpacity activeOpacity={1}>
            <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
              <Image
                source={{
                  uri: item?.gifUrl || "https://via.placeholder.com/150",
                }}
                className="rounded-b-[40px]"
                style={{
                  width: widthPercentageToDP(100),
                  height: heightPercentageToDP(50),
                }}
                resizeMode="cover"
              />
              <TouchableOpacity
                onPress={handleClose}
                className="absolute top-1 right-0 mx-2 mt-4 rounded-full bg-black"
              >
                <Ionicons
                  name="close-circle-outline"
                  size={heightPercentageToDP(4)}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <View className="mt-4 space-y-2 mx-4 mb-10">
              <Animated.View
                entering={FadeInDown.duration(400).delay(100).springify()}
              >
                <Text
                  style={{ fontSize: heightPercentageToDP(3.5) }}
                  className="font-semibold text-black tracking-wide"
                >
                  {item?.name}{" "}
                </Text>
              </Animated.View>

              <Animated.View
                entering={FadeInDown.duration(400).delay(200).springify()}
              >
                <Text
                  style={{ fontSize: heightPercentageToDP(2.2) }}
                  className="text-gray-700 mt-2"
                >
                  Equipment:{" "}
                  <Text className="font-bold">{item?.equipments} </Text>
                </Text>
              </Animated.View>

              <Animated.View
                entering={FadeInDown.duration(400).delay(300).springify()}
              >
                <Text
                  style={{ fontSize: heightPercentageToDP(2.2) }}
                  className="text-gray-700"
                >
                  Secondary Muscles:{" "}
                  <Text className="font-bold">{item?.secondaryMuscles} </Text>
                </Text>
              </Animated.View>

              <Animated.View
                entering={FadeInDown.duration(400).delay(400).springify()}
              >
                <Text
                  style={{ fontSize: heightPercentageToDP(2.2) }}
                  className="text-gray-700"
                >
                  Target Muscle:{" "}
                  <Text className="font-bold">{item?.targetMuscles} </Text>
                </Text>
              </Animated.View>

              <Animated.View
                entering={FadeInDown.duration(400).delay(500).springify()}
              >
                <Text
                  style={{ fontSize: heightPercentageToDP(3) }}
                  className="text-gray-700 mt-2"
                >
                  Instructions
                </Text>
              </Animated.View>

              {item?.instructions
                ?.split(".")
                .filter((step) => step.trim())
                .map((step, index) => (
                  <Animated.View
                    key={index}
                    entering={FadeInDown.duration(400)
                      .delay((index + 6) * 100)
                      .springify()}
                  >
                    <Text
                      style={{ fontSize: heightPercentageToDP(2) }}
                      className="text-gray-600 tracking-wide mb-1"
                    >
                      {step.trim()}
                    </Text>
                  </Animated.View>
                ))}
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default exerciseDetails;
