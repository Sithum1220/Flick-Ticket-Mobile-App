import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import FavoriteMovies from "@/data/favorite-movies.json";

export default function Favorite() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Favorite Movies",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitleAlign:"center"
        }}
      />

      <SafeAreaView className="bg-white flex-1">
        <View className="bg-white p-4">
          <FlatList
            data={FavoriteMovies}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              gap: 20,
              paddingVertical: 5
            }}
            columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
            renderItem={({ item, index }) => (
              <View key={index} className="w-[48%]">
                <TouchableOpacity>
                  <Image
                    source={{ uri: item.image }}
                    className="w-[100%] h-64 rounded-xl"
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
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
