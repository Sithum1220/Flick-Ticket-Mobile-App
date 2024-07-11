import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import TrendingMovies from '@/data/trending-movies.json';
import { Link } from 'expo-router';

export default function RecentMovieCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= TrendingMovies.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ animated: true, index: currentIndex, viewPosition: 0.5 });
    }
  }, [currentIndex]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const width = event.nativeEvent.layoutMeasurement.width;
    const newIndex = Math.round(offsetX / width);

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      setCurrentIndex(newIndex);
    }, 100);
  };

  return (
    <View className="relative">
      <FlatList
        ref={flatListRef}
        data={TrendingMovies}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 30,
          marginBottom: 0,
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View key={index} className="w-80">
            <Image source={{ uri: item.image }} className="w-full h-48 rounded-xl" />
            <View className="flex justify-between items-center flex-row px-2 py-1 w-full bg-custom-dark-transparent absolute bottom-0 rounded-b-xl">
              <View>
                <Text className="text-lg text-white font-bold">{item.title}</Text>
                <Text className="text-sm text-white">{item.bookingOpenDate}</Text>
              </View>
              <Link href={`/navigation/trending-movies/${item.id}`} asChild>
                <TouchableOpacity onPress={() => { }}>
                  <View className="bg-[#1D31A5] pb-1 px-2 rounded-2xl">
                    <Text className="text-white">Book Now</Text>
                  </View>
                </TouchableOpacity>
              </Link>
            </View>
            <View className="bg-[#1D31A5] pb-1 p-1 px-2 rounded-lg absolute top-0 mt-2 ml-2 flex-row items-center">
              <Text className="text-white font-bold">Trending Now</Text>
            </View>
          </View>
        )}
        onScroll={onScroll}
        scrollEventThrottle={16}
        snapToAlignment="center"
        decelerationRate="fast"
        pagingEnabled
      />
      <View className="absolute bottom-0 left-0 right-0 flex flex-row justify-center mb-1">
        {TrendingMovies.map((_, index) => (
          <View
            key={index}
            className={`h-2 w-4 mx-1 rounded-full ${index === currentIndex ? 'bg-red-500 w-8' : 'bg-gray-300'}`}
          />
        ))}
      </View>
    </View>
  );
}
