import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { router, Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Icons } from "@/components/Icons/Icons";
import DateButton from "@/components/DateButton/DateButton";
import Dates from "@/data/date-buttons.json";
import TimeButton from "@/components/TimeButton/TimeButton";
import BlueButton from "@/components/BlueButton/BlueButton";

export default function SelectSeat() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const moviesParam = params.movies;
  const id = params.id;

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Select Seat",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <View className="mr-6 bg-black p-1 rounded-lg">
                <Feather name="arrow-left" size={22} color={Colors.white} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <SafeAreaView className="bg-white flex-1">
        <ScrollView>
          <View className="mt-[5%] p-4">
            <View>
              <Image
                source={require("../../../assets/images/audience_view.jpg")}
                className="w-full h-44"
              />
            </View>

            <View className="flex-row flex-wrap gap-2">
              {Array.from({ length: 32 }).map((_, index) => (
                <Icons
                  key={index}
                  IconComponent={MaterialCommunityIcons}
                  name={"seat-outline"}
                  size={44}
                  color={"#6b7280"}
                />
              ))}
            </View>

            <View className="bg-gray-100 mt-[8%] rounded-3xl p-4">
              <View className="flex-row gap-2">
                <Text className="text-gray-600">Today is</Text>
                <Text>05 July 2024</Text>
              </View>
              <View>
                <Text className="text-xl font-bold pt-8 pb-2">
                  Choose a day. July 2024
                </Text>
              </View>
              <DateButton />
              <View>
                <Text className="text-xl font-bold mt-[5%] pb-2">
                  Choose a time
                </Text>
              </View>
              <TimeButton />
              <View className="items-center flex-row justify-between pt-4">
                <View className="flex-row items-center">
                  <Text className="mr-1 font-black text-xl">$83</Text>
                  <Text className="text-sm">x</Text>
                  <Text className="text-sm">3seats</Text>
                </View>
                <View>
                  <BlueButton
                    name={"Confirm Seat"}
                    p={"p-4"}
                    onPress={() => {
                      router.navigate({
                        pathname: "/screen/CheckoutScreen/CheckoutScreen",
                        params: {
                          movies: params.movies,
                          id: id,
                        },
                      });
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
