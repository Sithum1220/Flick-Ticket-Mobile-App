import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { Colors } from "@/constants/Colors";

export default function PaymentMethod(props: any) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View className={`${props.mt} p-4 bg-gray-100 rounded-xl`}>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-6">
          <Image source={props.image} className={`${props.w} ${props.h}`} />
          <Text className="text-lg ">{props.title}</Text>
        </View>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? Colors.blue : undefined}
          style={{ borderRadius: 100 }}
        />
      </View>
    </View>
  );
}
