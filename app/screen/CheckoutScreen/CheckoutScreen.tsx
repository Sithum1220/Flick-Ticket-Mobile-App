import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
  Feather,
  MaterialCommunityIcons,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import Svg, { Line } from "react-native-svg";
import { Colors } from "@/constants/Colors";
import Input from "@/components/Input/Input";
import BlueButton from "@/components/BlueButton/BlueButton";
import { MovieType } from "@/types/MovieType";
const { width } = Dimensions.get("window");

export default function CheckoutScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const moviesParam = params.movies;
  const id =  params.id;
  const seatsArray = params.seats;
  // const [seats, setSeats] = useState([])

  // useEffect(() => {
  // setSeats(params.seats);
  // },[seats])
  
 
  const movie:MovieType =
    typeof moviesParam === "string" ? JSON.parse(moviesParam) : [];

    const seats =
    typeof seatsArray === "string" ? JSON.parse(seatsArray) : [];
  console.log(seats)
  if (!movie) {
    return (
      <View className="p-4 bg-white">
        <Text>Movie not found</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Checkout",
          headerTitleStyle: {
            fontSize: 25,
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

      <SafeAreaView className="bg-white flex-1">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="p-4 bg-white">
            <View className="bg-[#EEEEEE] p-4 rounded-xl ">
              <View className="flex flex-row gap-4">
                <View>
                  <Image
                    source={{ uri: movie.displayImage }}
                    className="w-32 h-32 rounded-xl"
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-4xl font-bold">{movie.movieName}</Text>
                  <Text className="text-gray-600 font-semibold">
                    {`${movie.duration.hrs} hrs ${movie.duration.min} min`}
                  </Text>
                  <View className="w-full pt-2">
                    <Text
                      className="text-[10px] text-gray-600"
                      numberOfLines={3}
                    >
                      {movie.synopsis}
                    </Text>
                  </View>
                </View>
              </View>
              <Text className="text-[18px] font-bold pt-[6%]">
                Your Booking
              </Text>

              <View className="flex flex-col gap-6 pt-[5%]">
                <View className="flex flex-row justify-between items-center">
                  <View className="flex flex-row items-center gap-2">
                    <MaterialCommunityIcons
                      name="seat-outline"
                      size={24}
                      color="#1e3a8a"
                    />
                    <Text className="text-gray-600 text-[16px]">Seats</Text>
                  </View>
                  <Text className="text-[16px] font-bold">{`${seats?.length} Seat`}</Text>
                </View>

                <View className="flex flex-row justify-between items-center">
                  <View className="flex flex-row items-center gap-2">
                    <Fontisto name="date" size={24} color="#1e3a8a" />
                    <Text className="text-gray-600 text-[16px]">Date</Text>
                  </View>
                  <Text className="text-[16px] font-bold">
                    Movie on 27 July 2024
                  </Text>
                </View>

                <View className="flex flex-row justify-between items-center">
                  <View className="flex flex-row items-center gap-2">
                    <MaterialIcons
                      name="access-time"
                      size={24}
                      color="#1e3a8a"
                    />
                    <Text className="text-gray-600 text-[16px]">Time</Text>
                  </View>
                  <Text className="text-[16px] font-bold">08:00 AM</Text>
                </View>
              </View>

              <Svg height="40" width={"100%"}>
                <Line
                  x1="0"
                  y1="20"
                  x2={width}
                  y2="20"
                  stroke="black"
                  strokeDasharray="5, 5"
                />
              </Svg>

              <Text className="text-[18px] font-bold pt-2">Price Details</Text>
              <View className="flex flex-col gap-6 pt-3">
                <View className="flex flex-row justify-between items-center">
                  <Text className="text-gray-600 text-[16px]">Price</Text>

                  <Text className="text-[16px] font-bold">$56.00</Text>
                </View>

                <View className="flex flex-row justify-between items-center">
                  <Text className="text-gray-600 text-[16px]">App Fee</Text>

                  <Text className="text-[16px] font-bold">$3.00</Text>
                </View>

                <View className="flex flex-row justify-between items-center">
                  <Text className="text-gray-600 text-[18px] font-bold">
                    Total Price
                  </Text>

                  <Text className="text-[16px] font-bold">$59.00</Text>
                </View>
              </View>
            </View>
            <View className="mt-[6%]">
              <Text className="text-[18px] font-bold pt-2">
                Enter Promo Code
              </Text>
              <Input
                placeHolder={"Enter Promo code"}
                mt={"mt-[3%]"}
                IconComponent={MaterialCommunityIcons}
                IconName={"brightness-percent"}
                IconSize={24}
                IconColor={Colors.primaryColor}
              />
            </View>
            <BlueButton name="Pay Now" p={"p-4"} mt={'mt-[8%]'} 
            onPress={() => {
              router.navigate('/screen/PaymentMethodScreen/PaymentMethodScreen');
            }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
