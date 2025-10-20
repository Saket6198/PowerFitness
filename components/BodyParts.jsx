import { bodyParts } from '@/constants';
import React from 'react';
import { Text, Touchable, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {
    heightPercentageToDP as hp
} from "react-native-responsive-screen";


const BodyParts = () => {
    return (
        <View className='mx-4'>
            <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">Exercises</Text>
            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 20 }}
                renderItem={({ item, index }) => <BodyPartCard index={index} item={item} />}
            />
        </View>
    )
}
const BodyPartCard = ({ item, index }) => {
    return (
        <View>
            <TouchableOpacity>
                
            </TouchableOpacity>
        </View>
    );
}

export default BodyParts