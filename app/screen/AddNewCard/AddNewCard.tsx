import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { Colors } from "@/constants/Colors";
import InputWithTitle from "@/components/InputWithTitle/InputWithTitle";
import BlueButton from "@/components/BlueButton/BlueButton";

export default function AddNewCard() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Add New Card",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
          },
          headerShadowVisible: false,
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
          <View className="p-6">
            <InputWithTitle
              title={"Card Number"}
              mt={"mt-[2%]"}
              IconComponent={Feather}
              IconName={"credit-card"}
              IconSize={24}
              placeHolder={"Card Number"}
              IconColor={Colors.primaryColor}
            />
            <InputWithTitle
              title={"Holder Name"}
              mt={"mt-[2%]"}
              IconComponent={Feather}
              IconName={"user"}
              IconSize={24}
              placeHolder={"Holder Name"}
              IconColor={Colors.primaryColor}
            />
            <InputWithTitle
              title={"Expire"}
              mt={"mt-[2%]"}
              IconComponent={Feather}
              IconName={"calendar"}
              IconSize={24}
              placeHolder={"Expire Date"}
              IconColor={Colors.primaryColor}
            />
            <InputWithTitle
              title={"CVV"}
              mt={"mt-[2%]"}
              IconComponent={Feather}
              IconName={"lock"}
              IconSize={24}
              placeHolder={"CVV"}
              IconColor={Colors.primaryColor}
            />

            <BlueButton name={'Add Card'} p={'p-4'} mt={'mt-[12%]'}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
