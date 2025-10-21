import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ExerciseList = ({ data }) => {
    return (
        <View className='mx-4'>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {data.map((item, index) => (
                    <ExerciseCard key={item.exerciseId} index={index} item={item} />
                ))}
            </View>
        </View>
    );
};

const ExerciseCard = ({ item, index }) => {
    return (
        <View>
            <TouchableOpacity
                style={{ width: wp(44), height: wp(52) }}
                className="flex justify-end p-4 mb-4 rounded-3xl overflow-hidden bg-neutral-100">

                {/* Exercise GIF */}
                <Image
                    source={{ uri: item.gifUrl }}
                    resizeMode='cover'
                    style={{
                        width: wp(44),
                        height: wp(52),
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        borderRadius: 30
                    }}
                />

                {/* Gradient Overlay */}
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={{
                        width: wp(44),
                        height: hp(15),
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30
                    }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                />

                {/* Exercise Name */}
                <Text
                    style={{ fontSize: hp(2), zIndex: 10 }}
                    className="text-white font-semibold tracking-wide capitalize"
                    numberOfLines={2}
                >
                    {item.name}
                </Text>

                {/* Target Muscle */}
                <Text
                    style={{ fontSize: hp(1.5), zIndex: 10 }}
                    className="text-neutral-300 capitalize mt-1"
                    numberOfLines={1}
                >
                    {item.targetMuscles[0]}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ExerciseList;