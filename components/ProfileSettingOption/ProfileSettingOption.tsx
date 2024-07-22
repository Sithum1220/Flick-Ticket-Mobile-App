import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

import { Icons } from "../Icons/Icons";
import { Colors } from "@/constants/Colors";


export default function ProfileSettingOption(props:any) {
  return (
    <View className="flex-row items-center gap-4">
      <Icons size={28} IconComponent={props.IconComponent} name={props.name} color={Colors.text.gray} />
      <Text>{props.title}</Text>
    </View>
  );
}
