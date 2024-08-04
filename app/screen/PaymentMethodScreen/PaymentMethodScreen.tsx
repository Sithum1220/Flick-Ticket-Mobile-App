import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Link, router, Stack } from "expo-router";
import { AntDesign, Feather, FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Icons } from "@/components/Icons/Icons";
import Checkbox from "expo-checkbox";
import Svg, { Line } from "react-native-svg";
import { Dimensions } from "react-native";
import PaymentMethod from "@/components/PaymentMethod/PaymentMethod";
import BlueButton from "@/components/BlueButton/BlueButton";

export default function PaymentMethodScreen() {
  const [isCardChecked, setCardChecked] = useState(false);
  const { width } = Dimensions.get("window");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Payment Method",
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
          <View className="p-4 mt-[2%]">
            <View className="p-4 bg-gray-100 rounded-xl">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-6">
                  <Icons
                    IconComponent={FontAwesome6}
                    name={"credit-card-alt"}
                    size={28}
                  />
                  <Text className="text-xl font-bold">Credit/Debit Card</Text>
                </View>
                <Checkbox
                  value={isCardChecked}
                  onValueChange={setCardChecked}
                  color={isCardChecked ? Colors.blue : undefined}
                  style={{ borderRadius: 100 }}
                />
              </View>
              <Image
                source={require("../../../assets/images/Card/Card.png")}
                className="w-full h-60 mt-[5%]"
              />
              <TouchableOpacity className="p-4 rounded-xl border border-red-400 items-center mt-[6%]">
                <Text className="text-xl text-red-400 font-semibold">
                  Add New Card
                </Text>
              </TouchableOpacity>
            </View>
            <View className="items-center mt-[5%] flex-row justify-center">
              <Svg height="10" width={"44%"}>
                <Line
                  x1="0"
                  y1="10"
                  x2={width}
                  y2="10"
                  stroke="black"
                  strokeDasharray=""
                />
              </Svg>
              <Text className="text-gray-600 px-4">Or</Text>
              <Svg height="10" width={"44%"}>
                <Line
                  x1="0"
                  y1="10"
                  x2={width}
                  y2="10"
                  stroke="black"
                  strokeDasharray=""
                />
              </Svg>
            </View>
            <View className="mt-[8%]">
              <PaymentMethod
                image={require("../../../assets/images/paypal/paypal.png")}
                title={"Paypal"}
                w={"w-8"}
                h={"h-8"}
              />
              <PaymentMethod
                image={require("../../../assets/images/applePay/applePay.png")}
                mt={"mt-[5%]"}
                title={"Apple Pay"}
                w={"w-12"}
                h={"h-5"}
              />
            </View>
            <BlueButton
              name={"Pay Now"}
              p={"p-4"}
              mt={"mt-[10%]"}
              onPress={() => setModalVisible(true)}
            />
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
            
          >
            <View className="flex-1 justify-center items-center mt-6">
              
              <View className="m-5 bg-white rounded-2xl p-9 items-center shadow-lg shadow-black">
              <TouchableOpacity
                  className="absolute top-4 left-4 bg-gray-300 p-1 rounded-full"
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Feather name="x" size={24} color="black" />
                </TouchableOpacity>
                <Image
                  source={require("../../../assets/images/done/done.png")}
                  className="w-24 h-24 mb-5"
                />
                <Text className="text-3xl font-bold mb-4 text-center">
                  Payment Success
                </Text>
                <Text className="text-lg mb-6 text-center">
                  Ticket Payment for the movie has been successful. Thank You!
                </Text>
                <Pressable
                  className="bg-blue-800  rounded-2xl p-4"
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    router.navigate("../../(tabs)");
                  }}
                >
                  <Text className="text-white font-bold text-center">
                    Go To Home
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
