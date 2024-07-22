import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Kanit_400Regular } from "@expo-google-fonts/kanit";
import { Colors } from "@/constants/Colors";
import { Feather, FontAwesome, Fontisto, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import ProfileSettingOption from "@/components/ProfileSettingOption/ProfileSettingOption";
import { Icons } from "@/components/Icons/Icons";

export default function Profile() {
  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Profile",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitleAlign: "center",
        }}
      />

      <SafeAreaView className="bg-white flex-1">
        <ScrollView>
          <View className="p-4">
            <View className="items-center p-4">
              <Image
                source={{
                  uri:
                    "https://img.freepik.com/premium-vector/young-man-face-avater-vector-" +
                    "illustration-design_968209-13.jpg",
                }}
                className="w-32 h-32 rounded-full"
              />
            </View>

            <View className="flex-row items-center pr-2 justify-between pt-[5%]">
              <View className="p-4 flex-col gap-1">
                <Text
                  style={{ fontFamily: "Kanit_400Regular" }}
                  className="text-3xl"
                >
                  Sithum Imesh
                </Text>
                <Text className="text-sm text-gray-600">
                  sithumimesh82@gmail.com
                </Text>
                <Text className="text-sm text-gray-600">+94 77-7524-729</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <View className="bg-red-400 p-3 px-4 rounded-lg">
                    <Text className="text-white font-semibold text-[16px]">
                      Edit
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View className="p-4 scroll-pr-40 mt-[6%] flex-col gap-8">
              <ProfileSettingOption
                name="edit"
                IconComponent={Feather}
                title={"Edit Profile"}
                onPress={() => {}}
                showArrowIcon={true}
                ArrowIconComponent={FontAwesome}
              />
              <ProfileSettingOption
                name="moon-o"
                IconComponent={FontAwesome}
                title={"Dark Mode"}
                onPress={() => {}}
                showArrowIcon={false}
                switchValue={isEnabled}
                onSwitchChange={toggleSwitch}
              />
              <ProfileSettingOption
                name="phone"
                IconComponent={Feather}
                title={"Help & Support"}
                onPress={() => {}}
                showArrowIcon={true}
                ArrowIconComponent={FontAwesome}
              />
              <ProfileSettingOption
                name="world-o"
                IconComponent={Fontisto}
                title={"Edit Profile"}
                onPress={() => {}}
                showArrowIcon={true}
                ArrowIconComponent={FontAwesome}
              />
            </View>

            <View className="justify-center items-center pt-[8%]">
            <TouchableOpacity>
            <View className="flex-row gap-5 items-center">
                <Icons IconComponent={SimpleLineIcons} name={'logout'} size={24} color={Colors.primaryColor}/>
                <Text className="text-red-400 text-xl font-semibold">Logout</Text>
              </View>
            </TouchableOpacity>
             
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
