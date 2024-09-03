import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useRef, useState } from 'react';
import { StartingDate } from '@/types/MovieType';

interface DatesProps {
  dates: StartingDate[];
}

export default function DateButton({ dates}: DatesProps) {
  const itemRef = useRef<(TouchableOpacity | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

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
        {dates.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => (itemRef.current[index] = el)} // Correct ref assignment
            onPress={() => handleSelectLanguage(index)}
            className={`flex-col gap-4 items-center p-4 rounded-2xl border ${
              activeIndex === index ? 'bg-red-400 border-transparent' : 'bg-white border-gray-500'
            }`}
          >
            <Text className={`${activeIndex === index ? 'text-white' : 'text-gray-500'}`}>{item.day}</Text>
            <Text className={`${activeIndex === index ? 'text-white' : 'text-gray-500'}`}>{item.date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
