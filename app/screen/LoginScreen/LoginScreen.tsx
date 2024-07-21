import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Link, Stack, useRouter } from "expo-router";
import LoginInputs from "@/components/LoginInputs/LoginInputs";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import BlueButton from "@/components/BlueButton/BlueButton";
import SignInMethod from "@/components/SignInMethod/SignInMethod";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Login Account",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
            fontWeight: "bold",
            fontSize: 24,
          },
          headerTitleAlign: "left",
          headerBackVisible: false,
          headerShadowVisible: false,
        }}
      />
      <SafeAreaView className="bg-white flex-1">
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 20,
            backgroundColor: "white",
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className=" bg-white p-4">
            <View>
              <Text className="text-gray-600 leading-snug">
                Login to access your personalized music collection ad playlist
                anytime, anywhere.
              </Text>
            </View>
            <LoginInputs
              title="Email Or Phone Number"
              placeHolder="email@example.com"
              IconComponent={MaterialCommunityIcons}
              IconSize={28}
              IconColor={Colors.primaryColor}
              IconName={"email-outline"}
              mt={"mt-[4%]"}
              keyboardType={"email-address"}
            />
            <LoginInputs
              title="Password"
              placeHolder="Password"
              IconComponent={Feather}
              IconSize={28}
              IconColor={Colors.primaryColor}
              IconName={"lock"}
              mt={"mt-[4%]"}
              secureTextEntry={true}
            />
            <View className="flex-1 pt-5 items-end">
              <TouchableOpacity>
                <Text className="text-blue-700">Forgot Password</Text>
              </TouchableOpacity>
            </View>

            <BlueButton
              mt={"mt-[5%]"}
              p="p-4"
              name="Login"
              onPress={() => {
                router.navigate('(tabs)');
                
              }}
             />
            <View className="flex-1 pt-8 items-center">
              <Text className="text-gray-500 text-lg">
                Or using other Method
              </Text>
              <SignInMethod
                image={require("../../../assets/images/SignInMethodIcon/Logo-google-icon-PNG.png")}
                title="Sign Up with Google"
              />
              <SignInMethod
                image={require("../../../assets/images/SignInMethodIcon/appple.png")}
                title="Sign Up with Apple"
              />
              <View className="flex-1 flex-row items-center gap-1 mt-6">
                <Text className="text-gray-700 text-lg">
                  Don't have an account yet?
                </Text>

                <TouchableOpacity>
                  <Link href={"../RegistrationScreen/RegistrationScreen"}>
                    <Text className="text-red-400">Register</Text>
                  </Link>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
