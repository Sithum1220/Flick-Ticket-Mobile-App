import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import MovieLanguages from '@/data/languages.json'

export default function LanguageButton() {
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectLanguage = (index: number) => {
      setActiveIndex(index);
     
  }
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
        gap: 20,
        paddingVertical: 10,
      }}>
         {MovieLanguages.map((item,index) => ( 
          <TouchableOpacity key={index} ref={(el) => (itemRef.current[index] == el)} onPress={() => handleSelectLanguage(index)} className={`flex-row items-center p-2 rounded-lg border ${activeIndex === index ? 'bg-blue-700 border-blue-700' : 'bg-white border-blue-800'}`}>
          <Text  className={`${activeIndex === index ? 'text-white' : 'text-blue-700'}`}>{item.title}</Text>
          </TouchableOpacity>
         ))}
      </ScrollView>
    </View>
  )
}