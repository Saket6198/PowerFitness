import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ExerciseList = ({ data }) => {
    const router = useRouter();
    return (
        <View className='mx-4'>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {data.map((item, index) => (
                    <ExerciseCard key={item.exerciseId} index={index} item={item} router={router} />
                ))}
            </View>
        </View>
    );
};

const ExerciseCard = ({ item, index, router }) => {
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()} style={{ width: wp(44) }} className="mb-4">
            <TouchableOpacity onPress={() => router.push({ pathname: '/exerciseDetails', params: item })} className="flex space-y-2">
                {/* Image Container */}
                <View className='bg-neutral-200 shadow rounded-3xl'>
                    <Image
                        source={{ uri: item.gifUrl }}
                        resizeMode='cover'
                        style={{
                            width: wp(44),
                            height: wp(52),
                        }}
                        className='rounded-[25px]'
                    />
                </View>

                {/* Text Container */}
                <View className="px-2 mt-2">
                    <Text
                        style={{ fontSize: hp(1.7) }}
                        className="text-neutral-700 font-semibold tracking-wide capitalize"
                        numberOfLines={2}
                    >
                        {item.name}
                    </Text>
                    <Text
                        style={{ fontSize: hp(1.4) }}
                        className="text-neutral-500 capitalize mt-1"
                        numberOfLines={1}
                    >
                        {item.targetMuscles[0]}
                    </Text>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default ExerciseList;