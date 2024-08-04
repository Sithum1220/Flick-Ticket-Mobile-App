import {Link, router, Stack, useLocalSearchParams} from "expo-router";
import {FlatList, TouchableOpacity, View, Image, Text} from "react-native";
import {Feather} from "@expo/vector-icons";
import {Colors} from "@/constants/Colors";
import LanguageButton from "@/components/LanguageButtons/LanguageButton";

export default function SeeAllScreen() {
    const params = useLocalSearchParams();
    const moviesParam = params.movies;
    const title = params.title;

    const movieList = typeof moviesParam === 'string' ? JSON.parse(moviesParam) : [];

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: `${title}`,
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: "bold",
                    },
                    headerShadowVisible:false,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <View className="mr-6 bg-black p-1 rounded-lg">
                                <Feather name="arrow-left" size={28} color={Colors.white} />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />

            <View className="bg-white p-4">
                <LanguageButton />
                <FlatList
                    data={movieList}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 20,
                        paddingVertical: 5,
                        paddingBottom: 70,
                    }}
                    columnWrapperStyle={{flex:1,justifyContent:'space-between'}}
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
        </>
    );
}
