import React, { useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, ActivityIndicator, Dimensions } from "react-native";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Kanit_400Regular } from "@expo-google-fonts/kanit";
import TrendingMovies from "@/components/TrendingMovies/TrendingMovies";
import Input from "@/components/Input/Input";
import { Colors } from "@/constants/Colors";
import { MovieDisplay } from "@/components/MovieDisplay/MovieDisplay";
import movies from '@/data/movies.json';
import { MovieType } from '@/types/MovieType';

const windowWidth = Dimensions.get('window').width;

export default function Home() {
  const [upcommingMovies, setUpcommingMovies] = useState<MovieType[]>([]);
  const [recommendedMovies, setRecommendedMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const filteredUpcommingMovies = (movies as MovieType[])
        .filter(item => item.category === "Upcomming Movies");

      const filteredRecommendedMovies = (movies as MovieType[])
        .filter(item => item.category === "Recommended Movies");

      setUpcommingMovies(filteredUpcommingMovies);
      setRecommendedMovies(filteredRecommendedMovies);
      setIsLoading(false);
    }, 1000);
  }, []);

  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  if (isLoading) {
    return (
      <View style={{ width: windowWidth - 35, height: 200 }} className="justify-center items-center">
        <ActivityIndicator size="large" color="#1D31A5" />
      </View>
    );
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
                      uri: "https://img.freepik.com/premium-vector/young-man-face-avater-vector-illustration-design_968209-13.jpg",
                    }}
                    className="w-16 h-16 rounded-full"
                  />
                  <View className="ml-[8%]">
                    <Text className="text-md text-gray-500 text-[14px]">
                      Welcome Back,
                    </Text>
                    <Text className="text-3xl font-bold" style={{ fontFamily: "Kanit_400Regular" }}>
                      Sithum Imesh
                    </Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <View className="bg-red-400 p-2 rounded-lg">
                    <Ionicons name="notifications" size={24} color={Colors.white} />
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
            <Input mt={"mt-[10%]"} IconComponent={Ionicons} IconSize={32} IconName="search" IconColor={Colors.primaryColor} placeHolder={"Search"} />
            <View className="flex-1 items-center">
              <TrendingMovies />
            </View>
            <MovieDisplay movie={upcommingMovies} title={"Upcoming Movies"} />
            <MovieDisplay movie={recommendedMovies} title={"Recommended Movies"} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
