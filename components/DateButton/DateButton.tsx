import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { StartingDate } from "@/types/MovieType";

interface DatesProps {
  dates: StartingDate[];
  onDateSelect: (index: number) => void;
}

export default function DateButton({ dates, onDateSelect }: DatesProps) {
  const itemRef = useRef<(TouchableOpacity | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [futureDate, setFutureDate] = useState<StartingDate[]>([]);

  
  useEffect(() => {
    const today = new Date();
    const todayDay = today.getDate(); // Get the day of the month
  
    dates.forEach((item) => {
      const itemDate = new Date(item.date);
      const itemDay = itemDate.getDate(); // Get the day of the month
  
      if (todayDay <= item.date) {
        futureDate.push(item)
      }
    });
  }, [dates]);

  const handleSelectLanguage = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
        }}
      >
        {futureDate.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => (itemRef.current[index] = el)} // Correct ref assignment
            onPress={() => {
              handleSelectLanguage(index);
              onDateSelect(item.date);
            }}
            className={`flex-col gap-4 items-center p-4 rounded-2xl border ${
              activeIndex === index
                ? "bg-red-400 border-transparent"
                : "bg-white border-gray-500"
            }`}
          >
            <Text
              className={`${
                activeIndex === index ? "text-white" : "text-gray-500"
              }`}
            >
              {item.day}
            </Text>
            <Text
              className={`${
                activeIndex === index ? "text-white" : "text-gray-500"
              }`}
            >
              {item.date}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
