import { fetchExercisesByBodyPart } from "@/api/exerciseDB";
import { bodyParts } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import ExerciseList from "@/components/ExerciseList";
import { upperArmsExercises } from "@/constants/dummyData";

const ExerciseDetails = () => {
  const router = useRouter();
  const { name } = useLocalSearchParams();
  const [exercises, setExercises] = React.useState<any[]>([]);
  const bodyPartItem = bodyParts.find(item => item.name === name);
  {/* FOR TESTING */}
  const data = upperArmsExercises.data;

  console.log("Exercise name:", name);
  // useEffect(() => {
  //   if (name) getExercises(name);
  // }, [name]);

  // const getExercises = async (bodyPart: any) => {
  //   const data = await fetchExercisesByBodyPart(bodyPart);
  //   setExercises(data);
  // }

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <ScrollView>
        <Image source={bodyPartItem?.image} style={{ width: wp(100), height: hp(45)}}  className="rounded-b-[40px] container" />
        <TouchableOpacity onPress={() => router.back()} style={{height: hp(5.5), width: wp(8.5), paddingTop: hp(0.5)}} className="bg-black mx-4 absolute rounded-full mt-2">
          <Ionicons
            name="chevron-back-outline"
            size={hp(4)}
          className="rounded-full"
          />
        </TouchableOpacity>
        <View className="space-y-3 mx-4 mt-4 mb-5">
          <Text style={{fontSize: hp(3)}} className="text-neutral-500 font-bold">{bodyPartItem?.name} exercises</Text>
        </View>
        <View className="mb-10 ">
          <ExerciseList data = {data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExerciseDetails;
