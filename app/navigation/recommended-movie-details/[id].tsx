import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, Button } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { MovieTypes } from '@/types/MovieTypes';
import RecommendedMovie from '@/data/recommended-movies.json';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import BlueButton from '@/component/BlueButton/BlueButton';

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const movies: MovieTypes | undefined = (RecommendedMovie as unknown as MovieTypes[]).find(
    (item) => item.id == id
  );

  const router = useRouter();

  if (!movies) {
    return (
      <View className='p-4 bg-white'>
        <Text>Movie not found</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: movies.title,
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <View className='mr-6 bg-black p-1 rounded-lg'>
                <Feather name='arrow-left' size={28} color={Colors.white} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='p-4 bg-white'>
          <Image className='w-full h-48 rounded-lg' source={{ uri: movies.detailsImage }} />
          <View className='mt-[10%] bg-gray-200 rounded-lg p-4 flex flex-row items-center justify-between'>
            <View className='flex flex-col gap-5'>
              <Text className='text-2xl font-bold'>{movies.title}</Text>
              <Text className='text-[16px] text-gray-600'>{movies.duration}</Text>
            </View>
            <View className='flex flex-col gap-6 items-end'>
              <MaterialIcons name='favorite-outline' size={28}/>
              <View className='flex flex-row items-center justify-center'>
                <Image source={{ uri: movies.imdbImage}} className='w-7 h-3' />
                <Text className='ml-3 text-sm text-gray-600'>{movies.imdbRating}</Text>
              </View>      
            </View>
          </View>

          <View className='mt-[8%]'>
            <View className='flex flex-col gap-4'>
              <Text className='text-xl font-bold '>Synopsis</Text>
              <Text className='leading-5 text-gray-600'>{movies.synopsis}</Text>
            </View>
          </View>
          <View className='mt-[6%]'>
            <Text className='text-xl font-bold '>Cast</Text>
            <FlatList 
              data={movies.cast}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 20,
                paddingVertical: 20,
                marginBottom: 0
              }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View className="w-32">
                  <TouchableOpacity onPress={() => {}}>
                    <View className='flex items-center'>
                    <Image source={{ uri: item.image }} className="w-full h-32 rounded-xl" />
                    <Text>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          <BlueButton name="Book Now"/>
        </View>
      </ScrollView>
    </>
  );
};

export default MovieDetails;
