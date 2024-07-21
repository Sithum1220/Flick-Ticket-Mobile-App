import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function (props: any) {
  return (
    <View className={`${props.mt}`}>
      <TouchableOpacity
        className={`${props.p}`+ " bg-[#1D31A5] rounded-xl flex items-center"}
        onPress={props.onPress}
      >
        <Text className="text-xl text-white font-semibold">{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
