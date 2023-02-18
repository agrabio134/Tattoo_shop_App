import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

import HomeScreenStyles from "./Styles/HomeScreenStyle";

const HomeScreen = () => {
  const images = [
    {
      source: require("../assets/images/image1.jpg"),
      description: "This is image 1",
    },
    {
      source: require("../assets/images/image2.jpg"),
      description: "This is image 2",
    },
    {
      source: require("../assets/images/image3.jpg"),
      description: "This is image 3",
    },
    {
      source: require("../assets/images/image4.jpg"),
      description: "This is image 4",
    },
    {
      source: require("../assets/images/image5.jpg"),
      description: "This is image 5",
    },
    {
      source: require("../assets/images/image6.jpg"),
      description: "This is image 6",
    },
    {
      source: require("../assets/images/image7.jpg"),
      description: "This is image 7",
    },
  ];

  const { width } = Dimensions.get("window");
  const ITEM_WIDTH = Math.round(width * 1);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 4) / 7);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView style={HomeScreenStyles.container}>
      <View style={HomeScreenStyles.headerContainer}>
        <Image
          style={HomeScreenStyles.logo}
          source={require("../assets/images/logo-icon.png")}
        />

        <Text style={HomeScreenStyles.headerText}>JOEY'S INK</Text>
      </View>
      <View style={HomeScreenStyles.carouselContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            let x = event.nativeEvent.contentOffset.x;
            let index = Math.round(x / Dimensions.get("window").width);
            setActiveIndex(index);
          }}
        >
          {images.map((image, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  alert(image.description);
                }}
              >
                <Image
                  source={image.source}
                  style={[
                    HomeScreenStyles.image,
                    { width: ITEM_WIDTH, height: ITEM_HEIGHT },
                  ]}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={HomeScreenStyles.indicatorContainer}>
          {images.map((image, index) => (
            <View
              key={index}
              style={[
                HomeScreenStyles.indicator,
                {
                  backgroundColor:
                    index === activeIndex ? "#7B83EB" : "#C4C4C4",
                },
              ]}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
