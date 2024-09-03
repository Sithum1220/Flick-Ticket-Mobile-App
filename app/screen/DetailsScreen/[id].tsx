import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { MovieTypes } from "@/types/MovieTypes";
import BlueButton from "@/components/BlueButton/BlueButton";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { MovieType } from "@/types/MovieType";
import movies from '@/data/movies.json';

export default function DetailsScreen() {
  const router = useRouter();
  const {id} = useLocalSearchParams();
  const movieId = typeof id === 'number' ? id : Number(id);

  const [isLoading, setIsLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState<MovieType | undefined>(undefined);

  useEffect(() => {
    const fetchMovieDetails = () => {
      const foundMovie = movies.find((item) => item.id === movieId);
      if (foundMovie) {
        //@ts-ignore
        setMovieDetails(foundMovie);
      } else {
        console.error(`No movie found with id: ${movieId}`);
      }
      setIsLoading(false);
    };
  
    // Simulate API call
    setTimeout(fetchMovieDetails, 1000);
  }, [movieId]);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!movieDetails) {
    return (
      <View className="p-4 bg-white">
        <Text>Movie not found</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: `${movieDetails.movieName}`,
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
          },
          headerShadowVisible: false,

          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <View className="mr-6 bg-black p-1 rounded-lg">
                <Feather name="arrow-left" size={28} color={Colors.white} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <SafeAreaView className="bg-white flex-1">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="p-4 bg-white">
            <Image
              className="w-full h-56 rounded-lg"
              source={{ uri: movieDetails.mainImage }}
            />
            <View className="mt-[10%] bg-gray-200 rounded-lg p-4 flex flex-row items-center justify-between">
              <View className="flex flex-col gap-5">
                <Text className="text-2xl font-bold">{movieDetails.movieName}</Text>
                <Text className="text-[16px] text-gray-600">
                  {`${movieDetails.duration.hrs} hrs ${movieDetails.duration.min} min   ${movieDetails.language}`}
                </Text>
              </View>
              <View className="flex flex-col gap-6 items-end">
                <MaterialIcons name="favorite-outline" size={28} />
                <View className="flex flex-row items-center justify-center">
                  <Image
                    source={require('../../../assets/images/imdb/imdb.png')}
                    className="w-7 h-3"
                  />
                  <Text className="ml-3 text-sm text-gray-600">
                    {`${movieDetails.imdbRating}/10`}
                  </Text>
                </View>
              </View>
            </View>

            <View className="mt-[8%]">
              <View className="flex flex-col gap-4">
                <Text className="text-xl font-bold ">Synopsis</Text>
                <Text className="leading-5 text-gray-600">
                  {movieDetails.synopsis}
                </Text>
              </View>
            </View>
            <View className="mt-[6%]">
              <Text className="text-xl font-bold ">Cast</Text>
              <FlatList
                data={movieDetails.cast}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: 20,
                  paddingVertical: 20,
                }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View className="w-32">
                    <TouchableOpacity onPress={() => {}}>
                      <View className="flex items-center">
                        <Image
                          source={{ uri: item.image }}
                          className="w-full h-32 rounded-xl"
                        />
                        <Text>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
            <BlueButton
              name="Book Now"
              p={"p-4"}
              mt={"mt-[2%]"}
              onPress={() => {
                // router.navigate({
                //   pathname: "/screen/SelectSeat/SelectSeat",
                //   params: {
                //     movies: params.movies,
                //     id: movies.id,
                //   },
                // });
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
