import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { Link, Stack, useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { MovieTypes } from "@/types/MovieTypes";
import RecommendedMovie from "@/data/recommended-movies.json";
import LanguageButton from "@/component/LanguageButton/LanguageButton";

const SeeAllRecommendedMovies = () => {
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Recommended Movies",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <View className="mr-6 bg-black p-1 rounded-lg">
                <Feather name="arrow-left" size={22} color={Colors.white} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

        <View className="bg-white p-2">
            <LanguageButton />
          <FlatList
            data={RecommendedMovie}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              gap: 5,
              paddingVertical: 5,
              paddingBottom: 70,
            }}
            renderItem={({ item, index }) => (
              <View key={index} className="w-[50%] p-2">
                <Link
                  href={`/navigation/recommended-movie-details/${item.id}`}
                  asChild
                >
                  <TouchableOpacity>
                    <Image
                      source={{ uri: item.image }}
                      className="w-[100%] h-52 rounded-xl"
                    />
                    <View className="flex justify-between flex-row mt-[6%] px-1">
                      <Text className="text-[10px]">{item.title}</Text>
                      <View className="flex justify-between flex-row items-center gap-2">
                        <Image
                          source={{ uri: item.imdbImage }}
                          className="w-7 h-3"
                        />
                        <Text className="text-[10px]">{item.imdbRating}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Link>
              </View>
            )}
          />
        </View>
    </>
  );
};

export default SeeAllRecommendedMovies;
