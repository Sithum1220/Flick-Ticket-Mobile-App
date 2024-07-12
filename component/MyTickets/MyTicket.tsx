import { View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import React from "react";
import MyTicketDetails from "../../data/my-ticket.json";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function MyTicket() {
  return (
    <View className="pt-6">
      <FlatList
      data={MyTicketDetails}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 20,
          paddingBottom: 150
        }}
        renderItem={({ item }) => (
          <Link href={`/navigation/ticket-details/${item.id}`} asChild>
          <TouchableOpacity  onPress={() => {}}>
            <Text className="text-[16px] text-gray-600">{item.date}</Text>
            <View className=" bg-[#EEEEEE] rounded-xl mt-6">
              <View className="p-3 flex flex-row items-center gap-3">
                <MaterialCommunityIcons
                  name="ticket-confirmation-outline"
                  size={28}
                  color="#1e3a8a"
                />
                <Text className="text-lg font-bold">{item.MovieName}</Text>
              </View>
              <View className="px-3 pt-4 flex flex-row justify-between">
                <View>
                  <Text className="text-gray-600">Name</Text>
                  <Text className="font-bold text-[14px]">{item.name}</Text>
                </View>
                <View>
                  <Text className="text-gray-600">Ticket</Text>
                  <Text className="font-bold text-[14px]">{item.seats}</Text>
                </View>
              </View>
              <View className="pt-4 flex flex-row justify-between items-center">
                <View className="bg-white w-5 h-7 rounded-2xl"></View>
                <Text>
                  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                  - - - - - - -
                </Text>
                <View className="bg-white w-5 h-7 rounded-2xl"></View>
              </View>

              <View className="px-3 pt-4 flex flex-row justify-between items-center mb-8">
                <View>
                  <Text className="font-bold text-[14px]">{item.time}</Text>
                  <Text className="text-gray-600 pt-1">Enter Cinema</Text>
                </View>

                <View className="flex flex-row">
                  <View className="flex flex-row items-center">
                    <View className="w-2 h-2 bg-black rounded"></View>
                    <View className="w-9 h-[1.5] bg-black"></View>
                  </View>
                  <View className="w-9 h-9 rounded-full mx-2 bg-red-400 flex justify-center items-center">
                  <MaterialCommunityIcons name="movie-open-check-outline" size={22} color="white" />
                  </View>
                  <View className="flex flex-row items-center">
                  <View className="w-9 h-[1.5] bg-black"></View>
                    <View className="w-2 h-2 bg-black rounded"></View>
                  </View>
                </View>

                <View>
                  <Text className="font-bold text-[14px]">{item.Status}</Text>
                  <Text className="text-gray-600 pt-1">Status</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          </Link>
        )}
        />
    </View>
  );
}
