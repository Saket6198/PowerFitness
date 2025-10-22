import { fetchExercisesByBodyPart } from "@/api/exerciseDB";
import ExerciseList from "@/components/ExerciseList";
import { bodyParts } from "@/constants";
import { upperArmsExercises } from "@/constants/dummyData";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Spinner from "react-native-loading-spinner-overlay";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
const ExerciseDetails = () => {
  const router = useRouter();
  const { name } = useLocalSearchParams();
  const [exercises, setExercises] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const bodyPartItem = bodyParts.find((item) => item.name === name);
  {
    /* FOR TESTING */
  }

  console.log("Exercise name:", name);
  useEffect(() => {
    if (name) getExercises(name);
    console.log("Fetching exercises for body part:", exercises);
  }, [name]);

  const getExercises = async (bodyPart: any) => {
    setLoading(true);
    try {
      const data = await fetchExercisesByBodyPart(bodyPart);
      if (data && typeof data === "object" && Array.isArray(data.data)) {
        setExercises(data.data);
      } else if (Array.isArray(data) && data.length > 0) {
        setExercises(data);
      } else {
        setExercises(upperArmsExercises.data);
      }
    } catch (error) {
      console.error("Error fetching exercises:", error);
      setExercises(upperArmsExercises.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <Spinner
        visible={loading}
        textContent={"Loading exercises..."}
        textStyle={{ color: "#FFF" }}
        overlayColor="rgba(0, 0, 0, 0.75)"
      />
      <ScrollView>
        <Image
          source={bodyPartItem?.image}
          style={{ width: wp(100), height: hp(45) }}
          className="rounded-b-[40px] container"
        />
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ height: hp(5.5), width: wp(8.5), paddingTop: hp(0.5) }}
          className="bg-black mx-4 absolute rounded-full mt-2"
        >
          <Ionicons
            name="chevron-back-outline"
            size={hp(4)}
            className="rounded-full"
          />
        </TouchableOpacity>
        <View className="space-y-3 mx-4 mt-4 mb-5">
          <Text
            style={{ fontSize: hp(3) }}
            className="text-neutral-500 font-bold"
          >
            {bodyPartItem?.name} exercises
          </Text>
        </View>
        <View className="mb-10 ">
          <ExerciseList data={exercises} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExerciseDetails;
