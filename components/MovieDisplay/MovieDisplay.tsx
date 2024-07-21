import {FlatList, View, Text, TouchableOpacity, Image} from "react-native";
import {Link, useRouter} from "expo-router";
import {useEffect, useState} from "react";
import {MovieTypes} from "@/types/MovieTypes";
import UpcomingMovie from '@/data/upcoming-movies.json';
import RecommendedMovie from '@/data/recommended-movies.json';
import path from "node:path";

export function MovieDisplay(props: any) {
    const [movies, setMovies] = useState<MovieTypes[]>([]);
    const router = useRouter();

    useEffect(() => {
        setMovies(props.movie.slice(0, 5) as MovieTypes[]);
    }, []);

    return (
        <View className='mt-[5%]'>
            <View className='flex flex-row justify-between items-center'>
                <Text className='font-bold text-lg'>{props.title}</Text>

                <Text onPress={() =>
                    router.navigate({
                        pathname: '/screen/SeeAllScreen/SeeAllScreen',
                        params: {
                            movies: JSON.stringify(props.movie),
                            title: props.title
                        }
                    })
                } className='text-red-400 text-sm'>See All</Text>

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
                        
                            <TouchableOpacity onPress={() => 
                                router.navigate({
                                    pathname: '/screen/DetailsScreen/DetailsScreen',
                                    params: {
                                        movies: JSON.stringify(props.movie),
                                        id:item.id
                                       
                                    }
                                })
                            }>
                                <Image source={{uri: item.image}} className="w-full h-60 rounded-xl"/>
                                <View className='flex justify-between flex-row mt-[6%]'>
                                    <Text>{item.title}</Text>
                                    <View className='flex justify-between flex-row items-center gap-2'>
                                        <Image source={{uri: item.imdbImage}} className="w-7 h-3"/>
                                        <Text className='text-[12px]'>{item.imdbRating}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        
                    </View>
                )}
            />
        </View>
    );
}
