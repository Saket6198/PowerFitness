import { sliderImages } from "@/constants";
import React from "react";
import { Image, View } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";


export const ImageSlider = () => {
  const itemWidth = wp(100) - 70;

  const renderItem = ({ item, index, animationValue }) => {
    return (
      <View style={{
        width: itemWidth,
        height: hp(25),
        borderRadius: 30,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image
          source={item}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain'
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ width: wp(100), height: hp(25) }}>
      <Carousel
        data={sliderImages}
        loop={true}
        autoPlay={true}
        autoPlayInterval={4000}
        width={itemWidth}
        height={hp(25)}
        style={{
          width: wp(100),
          height: hp(25),
          alignItems: 'center',
          justifyContent: 'center'
        }}
        renderItem={renderItem}
        scrollAnimationDuration={1000}
        defaultIndex={1}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
      />
    </View>
  );
};