import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Times from "@/data/time-buttons.json";

export default function TimeButton() {
  return (
    <View>
      <TouchableOpacity className="flex-row bg-slate-400 justify-between">
        {Times.map((item, index) => (
          <View className="">
            <View className="p-4 border border-gray-500" key={index}>
              <Text>{item.time}</Text>
            </View>
          </View>
        ))}
      </TouchableOpacity>
    </View>
  );
}