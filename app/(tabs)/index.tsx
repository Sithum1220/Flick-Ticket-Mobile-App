import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity, TextInput, ScrollView,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Kanit_400Regular } from "@expo-google-fonts/kanit";
import TrendingMovies from "@/components/TrendingMovies/TrendingMovies";
import Input from "@/components/Input/Input";
import {Colors} from "@/constants/Colors";
import {MovieDisplay} from "@/components/MovieDisplay/MovieDisplay";
import UpcomingMovie from '@/data/upcoming-movies.json';
import RecommendedMovie from '@/data/recommended-movies.json';

export default function Home() {
  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerBackground: () => (
            <View className="bg-white p-4 pt-[15%]">
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <Image
                    source={{
                      uri: "https://img.freepik.com/premium-vector/young-man-face-avater-vector-" +
                          "illustration-design_968209-13.jpg"
                    }}
                    className="w-16 h-16 rounded-full"
                  />
                  <View className="ml-[8%]">
                    <Text className="text-md text-gray-500 text-[14px]">
                      Welcome Back,
                    </Text>
                    <Text
                      className="text-3xl font-bold"
                      style={{ fontFamily: "Kanit_400Regular" }}
                    >
                      Sithum Imesh
                    </Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <View className="bg-red-400 p-2 rounded-lg">
                    <Ionicons
                      name="notifications"
                      size={24}
                      color={Colors.white}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ),
        }}
      />

      <SafeAreaView className="bg-white flex-1">
          <ScrollView showsVerticalScrollIndicator={false}>
              <View className="p-4">
                  <View>
                      <Input mt={"mt-[10%]"} IconComponent={Ionicons} IconSize={32} IconName="search"
                             IconColor={Colors.primaryColor} placeHolder={"Search"} />
                  </View>
                  <View className="flex-1 items-center">
                      <TrendingMovies />
                  </View>
                  <MovieDisplay movie={UpcomingMovie} title={"Upcoming Movies"}/>
                  <MovieDisplay movie={RecommendedMovie} title={"Recommended Movies"}/>
              </View>

          </ScrollView>
      </SafeAreaView>
    </>
  );
}
