import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    NativeSyntheticEvent,
    NativeScrollEvent,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import movies from '@/data/movies.json';
import { BookingOpenDate, MovieType } from '@/types/MovieType';
import { Link, useRouter } from "expo-router";

const windowWidth = Dimensions.get('window').width;

export default function TrendingMovies() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList<MovieType>>(null);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
    const [trendingMovies, setTrendingMovies] = useState<MovieType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const filteredMovies = (movies as MovieType[])
                .filter(item => item.category === "Trending Movies")
                .slice(0, 3);
            setTrendingMovies(filteredMovies);
            setIsLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        if (trendingMovies.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingMovies.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [trendingMovies]);

    useEffect(() => {
        if (trendingMovies.length === 0) return;
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ animated: true, index: currentIndex });
        }
    }, [currentIndex, trendingMovies]);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (trendingMovies.length === 0) return;

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

    const formatBookingOpenDate = (date: BookingOpenDate) => {
        return `${date.month} ${date.day}, ${date.year}`;
    };

    if (isLoading) {
        return (
            <View style={{ width: windowWidth - 35, height: 200 }} className="justify-center items-center">
                <ActivityIndicator size="large" color="#1D31A5" />
            </View>
        );
    }

    if (trendingMovies.length === 0) {
        return (
            <View style={{ width: windowWidth - 35, height: 200 }} className="justify-center items-center">
                <Text>No trending movies available</Text>
            </View>
        );
    }

    return (
        <View style={{ width: windowWidth - 35 }}>
            <FlatList
                ref={flatListRef}
                data={trendingMovies}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 20,
                    paddingVertical: 30
                }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ width: windowWidth - 35 }} className="justify-items-center">
                        <Image source={{uri: item.displayImage}} className="aspect-video rounded-xl" />
                        <View className="flex justify-between items-center flex-row px-2 py-2 w-full bg-custom-dark-transparent absolute bottom-0 rounded-b-xl">
                            <View>
                                <Text className="text-lg text-white font-bold">{item.movieName}</Text>
                                <Text className="text-sm text-white">{formatBookingOpenDate(item.bookingOpenDate)}</Text>
                            </View>
                            <Link href={`/screen/DetailsScreen/${item.id}`} asChild>
                            <TouchableOpacity>
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
                {trendingMovies.map((_, index) => (
                    <View
                        key={index}
                        className={`h-2 w-4 mx-1 rounded-full ${index === currentIndex ? 'bg-red-500 w-8' : 'bg-gray-300'}`}
                    />
                ))}
            </View>
        </View>
    );
}