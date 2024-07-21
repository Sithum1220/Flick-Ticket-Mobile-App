import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import BlueButton from "@/components/BlueButton/BlueButton";
import { Link, Stack, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts, Kanit_400Regular } from "@expo-google-fonts/kanit";
import { Colors } from "@/constants/Colors";
import Input from "@/components/Input/Input";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import LoginInputs from "@/components/LoginInputs/LoginInputs";
import SignInMethod from "@/components/SignInMethod/SignInMethod";
import { FullWindowOverlay } from "react-native-screens";

export default function RegistrationScreen() {
  const router = useRouter();
  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Create Account",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
            fontWeight: "bold",
            fontSize: 24,
          },
          headerTitleAlign: "left",
          headerBackVisible: false,
          headerShadowVisible: false
        }}
      />
      <SafeAreaView className="bg-white flex-1">
      <ScrollView contentContainerStyle={{paddingBottom:20, backgroundColor: 'white'}} showsVerticalScrollIndicator={false}>
      <View className=" bg-white p-4">
        <View>
          <Text className="text-gray-600 leading-snug">
            Create your account to unlock a personalized music experience
            tailored to your taste.
          </Text>
        </View>

        <LoginInputs
          title="Username"
          placeHolder="Username"
          IconComponent={AntDesign}
          IconSize={28}
          IconColor={Colors.primaryColor}
          IconName={"user"}
          mt={"mt-[4%]"}
        />
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
        <BlueButton mt={"mt-[8%]"} p="p-4" name="Create Account" />
        <View className="flex-1 pt-10 items-center">
          <Text className="text-gray-500 text-lg">Or using other Method</Text>
          <SignInMethod image={require('../../../assets/images/SignInMethodIcon/Logo-google-icon-PNG.png')} title="Sign Up with Google"/>
          <SignInMethod image={require('../../../assets/images/SignInMethodIcon/appple.png')} title="Sign Up with Apple"/>
          <View className="flex-1 flex-row items-center gap-1 mt-8">
          <Text className="text-gray-700 text-lg">Already have an account?</Text>
          
          <TouchableOpacity>
          <Link href={"../LoginScreen/LoginScreen"}>  
            <Text className="text-red-400">Login</Text>
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
