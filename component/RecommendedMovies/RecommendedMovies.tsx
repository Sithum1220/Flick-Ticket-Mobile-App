import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import RecommendedMovie from '@/data/recommended-movies.json';
import { Link } from 'expo-router';
import { MovieTypes } from '@/types/MovieTypes';

const RecommendedMovies = () => {
  const [movies, setMovies] = useState<MovieTypes[]>([]);

  useEffect(() => {
    setMovies(RecommendedMovie.slice(0, 5) as MovieTypes[]);
    
  }, []);
  return (
    <View className='mt-[10%]'>
        <View className='flex flex-row justify-between items-center'>
            <Text className='font-bold text-lg'>Recommended Movies</Text>
            <Link href={`/navigation/see-all-recommended-movies/SeeAllRecommendedMovies`} asChild>
            <Text className='text-red-400 text-sm'>See All</Text>
            </Link>
            
        </View>
      <FlatList 
      data={movies}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 20,
        paddingVertical: 30,
        marginBottom: 0,
      }}
      renderItem={({item, index}) => (
        <View key={index} className='w-44'>
            <Link href={`/navigation/recommended-movie-details/${item.id}`} asChild>
            <TouchableOpacity>
                <Image source={{ uri: item.image }} className="w-full h-60 rounded-xl" />
                <View className='flex justify-between flex-row mt-[6%]'>
                    <Text>{item.title}</Text>
                    <View className='flex justify-between flex-row items-center gap-2'>
                        <Image source={{ uri: item.imdbImage }} className="w-7 h-3" />
                        <Text className='text-[12px]'>{item.imdbRating}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            </Link>
        </View>
      )}
      />
    </View>
  )
}

export default RecommendedMovies