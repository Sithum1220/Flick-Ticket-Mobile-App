import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import Tickets from "@/data/my-ticket.json";
import { TicketTypes } from "@/types/TicketTypes";
import {
  Feather,
  MaterialCommunityIcons,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Svg, { Line } from "react-native-svg";
import BlueButton from "@/components/BlueButton/BlueButton";
const { width } = Dimensions.get("window");

export default function TicketDetails() {
  const { id } = useLocalSearchParams();
  const tickets: TicketTypes | undefined = (
    Tickets as unknown as TicketTypes[]
  ).find((item) => item.id == id);

  const router = useRouter();

  if (!tickets) {
    return (
      <View className="p-4 bg-white">
        <Text>Ticket not found</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Ticket Details",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
          },
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
            <View className="bg-[#EEEEEE] p-4 rounded-xl">
              <View className="flex flex-row gap-4">
                <View>
                <Image
                  source={{ uri: tickets.image }}
                  className="w-32 h-32 rounded-xl"
                />
                </View>
                <View className="flex-1">
                  <Text className="text-4xl font-bold">
                    {tickets.MovieName}
                  </Text>
                  <Text className="text-gray-600 font-semibold">
                    {tickets.duration}
                  </Text>
                  <View className="w-full pt-2">
                    <Text className="text-[10px] text-gray-600" numberOfLines={3}>{tickets.synopsis}</Text>
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
                  <Text className="text-[16px] font-bold">{tickets.seats}</Text>
                </View>

                <View className="flex flex-row justify-between items-center">
                  <View className="flex flex-row items-center gap-2">
                    <Fontisto name="date" size={24} color="#1e3a8a" />
                    <Text className="text-gray-600 text-[16px]">Date</Text>
                  </View>
                  <Text className="text-[16px] font-bold">{tickets.date}</Text>
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
                  <Text className="text-[16px] font-bold">{tickets.time}</Text>
                </View>
              </View>

              <Svg height="40" width={'100%'}>
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

                  <Text className="text-[16px] font-bold">{tickets.price}</Text>
                </View>

                <View className="flex flex-row justify-between items-center">
                  <Text className="text-gray-600 text-[16px]">App Fee</Text>

                  <Text className="text-[16px] font-bold">
                    {tickets.appFee}
                  </Text>
                </View>

                <View className="flex flex-row justify-between items-center">
                  <Text className="text-gray-600 text-[18px] font-bold">
                    Total Price
                  </Text>

                  <Text className="text-[16px] font-bold">
                    {tickets.TotalPrice}
                  </Text>
                </View>
              </View>
              <View className="pt-6 flex flex-col justify-center items-center">
                <Image
                  source={{
                    uri: "https://static.vecteezy.com/system/resources/previews/022/722/108/original/barcode-qr-code-transparent-free-free-png.png",
                  }}
                  className="w-full h-16"
                />
                <Text className="py-4">080820029933</Text>
              </View>
              <BlueButton name="Download Ticket Pdf" p={"p-4"} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
