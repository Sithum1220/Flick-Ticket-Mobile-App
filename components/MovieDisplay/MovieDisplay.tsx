import React, { useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity, Image } from "react-native";
import { Link, useRouter } from "expo-router";
import { MovieType } from "@/types/MovieType";

export function MovieDisplay({ movie, title }: { movie: MovieType[]; title: string }) {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const router = useRouter();

  useEffect(() => {
    setMovies(movie.slice(0, 5));
  }, [movie]);

  return (
    <View className="mt-[5%]">
      <View className="flex flex-row justify-between items-center">
        <Text className="font-bold text-lg">{title}</Text>
        <Text
          onPress={() =>
            router.push({
              pathname: "/screen/SeeAllScreen/SeeAllScreen",
              params: { movies: JSON.stringify(movie), title },
            })
          }
          className="text-red-400 text-sm"
        >
          See All
        </Text>
      </View>
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 20, paddingVertical: 30, marginBottom: 0 }}
        renderItem={({ item }) => (
          <View className="w-44">
            <Link href={`/screen/DetailsScreen/${item.id}`} asChild>
            <TouchableOpacity>
              <Image source={{ uri: item.displayImage }} className="w-full h-60 rounded-xl" />
              <View className="flex justify-between flex-row mt-[6%]">
                <Text>{item.movieName}</Text>
                <View className="flex justify-between flex-row items-center gap-2">
                  <Image source={require("../../assets/images/imdb/imdb.png")} className="w-7 h-3" />
                  <Text className="text-[12px]">{item.imdbRating}</Text>
                </View>
              </View>
            </TouchableOpacity>
            </Link>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
