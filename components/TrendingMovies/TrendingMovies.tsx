import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    NativeSyntheticEvent,
    NativeScrollEvent,
    Dimensions
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import TrendingMovie from '@/data/trending-movies.json';
import { Link, useRouter } from "expo-router";
const windowWidth = Dimensions.get('window').width;

export default function TrendingMovies() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                if (nextIndex >= TrendingMovie.length) {
                    return 0;
                }
                return nextIndex;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ animated: true, index: currentIndex });
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
        <View style={{ width: windowWidth - 35}}>
            <FlatList
                ref={flatListRef}
                data={TrendingMovie}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 20,
                    paddingVertical: 30
                }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View key={index} style={{ width: windowWidth - 35}} className="justify-items-center">
                            <Image source={{ uri: item.detailsImage }} className="aspect-video rounded-xl" />
                        <View className="flex justify-between items-center flex-row px-2 py-2 w-full bg-custom-dark-transparent absolute bottom-0 rounded-b-xl">
                            <View>
                                <Text className="text-lg text-white font-bold">{item.title}</Text>
                                <Text className="text-sm text-white">{item.bookingOpenDate}</Text>
                            </View>
                        
                                <TouchableOpacity onPress={() => {
                                    router.navigate({
                                        pathname: '/screen/DetailsScreen/DetailsScreen',
                                        params: {
                                            movies: JSON.stringify(TrendingMovie),
                                            id:item.id
                                           
                                        }
                                    })
                                }}>
                                    <View className="bg-[#1D31A5] pb-1 px-2 rounded-2xl">
                                        <Text className="text-white">Book Now</Text>
                                    </View>
                                </TouchableOpacity>
                           
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
                {TrendingMovie.map((_, index) => (
                    <View
                        key={index}
                        className={`h-2 w-4 mx-1 rounded-full ${index === currentIndex ? 'bg-red-500 w-8' : 'bg-gray-300'}`}
                    />
                ))}
            </View>
        </View>
    );
}
