import React from 'react';
import { View, Text } from 'react-native';
import Carousel, { ParallaxImages } from 'react-native-snap-carousel';
import { sliderImage } from '../constraints';

const ItemCard = ({ item, index }, parallaxProps) => {
  return (
    <View>
      <ParallaxImages
        source={{ uri: item.imageUrl }}
        containerStyle={{ flex: 1, borderRadius: 8 }}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
      <Text>{item.title}</Text>
    </View>
  );
};

const ImageSlider = () => {
  return (
    <View>
      <Text>hello there</Text>
      <Carousel
        data={sliderImage}
        loop={true}
        autoplay={true}
        renderItem={ItemCard}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default ImageSlider;
