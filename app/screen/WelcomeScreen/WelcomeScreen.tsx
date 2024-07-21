import React from "react";
import {
  View,
  Text,
  Image,
  Alert,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import { Link, Stack, useNavigation, useRouter } from "expo-router";

const slides = [
  {
    key: "1",
    title: "Welcome To FlickTickets!",
    text: "Your ultimate destination for booking movie tickets effortlessly",
    image: require("../../../assets/images/welcome-screen-images/welcome_01.jpg"),
  },
  {
    key: "2",
    title: "Secure Your Seats",
    text: "Choose your perfect seats and book instantly, hassle-free",
    image: require("../../../assets/images/welcome-screen-images/welcome_01.jpg"),
  },
  {
    key: "3",
    title: "Ready to Get Started?",
    text: "Sign up now and dive into the world of movies with Flick Tickets!",
    image: require("../../../assets/images/welcome-screen-images/welcome_01.jpg"),
  }
];

const Welcome = () => {
  const router = useRouter();

  const buttonLabel = (label:any) => {
    return(
      <View className="p-3">
        <Text className="text-gray-600  font-semibold text-lg">
          {label}
        </Text>
      </View>
    )
  }
  const renderSlide = ({ item }:any) => {
    return (
      <View className="bg-white flex-1 pt-[25%]">
        <View className="p-4 w-full">
          <View className="p-6">
            <Image source={item.image} className="w-full h-96 rounded-3xl" resizeMode="cover" />
          </View>
          <View>
            <Text className="text-black text-3xl font-bold mb-4 text-center">
              {item.title}
            </Text>
            <Text className="text-gray-600 text-center text-[14px]">{item.text}</Text>
          </View>
        </View>
      </View>
    );
  };

  const onDone = () => {
   router.navigate('../../screen/RegistrationScreen/RegistrationScreen')
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderSlide}
      onDone={onDone}
      activeDotStyle={{
        backgroundColor: "#f87171",
        width: 30
      }}
      showSkipButton
      renderNextButton={() => buttonLabel("Next")}
      renderSkipButton={() => buttonLabel("Skip")}
      renderDoneButton={() => buttonLabel("Done")}
    />
  );
};

export default Welcome;
