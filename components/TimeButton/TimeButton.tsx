import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import Times from "@/data/time-buttons.json";

export default function TimeButton() {
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectLanguage = (index: number) => {
      setActiveIndex(index);
     
  }
  return (
    <View className="flex-row flex-wrap gap-3 justify-center mt-[3%]">
      {Times.map((item, index) => (
        <TouchableOpacity key={index} ref={(el) => (itemRef.current[index] == el)}  className="w-[22%] mb-[10px] flex-row items-center justify-center " onPress={() => handleSelectLanguage(index)}>
          <View className={`px-1 py-3 border items-center rounded-lg ${activeIndex === index ? 'bg-red-400 border-transparent' : 'bg-white border-gray-400'}`}>
            <Text className={`${activeIndex === index ? 'text-white' : 'text-black'}`}>{item.time}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}