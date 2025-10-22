import { bodyParts } from '@/constants/index';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const BodyParts = () => {
    const router = useRouter();

    return (
        <View className='mx-4'>
            <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700 mb-4">Exercises</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {bodyParts.map((item, index) => (
                    <BodyPartCard key={item.name} index={index} item={item} router={router} />
                ))}
            </View>
        </View>
    )
}

const BodyPartCard = ({ item, index, router }) => {
    return (
        <Animated.View entering={FadeInDown.duration(200).delay(index*200).springify()}>
            <TouchableOpacity
                onPress={() => router.push({
                    pathname: '/exercises/[name]',
                    params: { name: item.name }
                })}
                style={{ width: wp(44), height: wp(52) }}
                className="flex justify-end p-4 mb-4 rounded-3xl overflow-hidden">
                    <Image
                        source={item.image}
                        resizeMode='cover'
                        style={{
                            width: wp(44),
                            height: wp(52),
                            position: 'absolute',
                        }}
                        className="rounded-3xl"
                    />

                <Text
                    style={{ fontSize: hp(2.3), zIndex: 10 }}
                    className="text-white font-semibold tracking-wide capitalize"
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
}

export default BodyParts;