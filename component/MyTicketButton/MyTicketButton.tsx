import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import TicketButtons from '../../data/ticket-buttons.json'

export default function MyTicketButton() {
    const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectLanguage = (index: number) => {
      setActiveIndex(index);
     
  }
  return (
    <View className='gap-2 justify-center flex-row'>
     {TicketButtons.map((item,index) => ( 
          <TouchableOpacity key={index} ref={(el) => (itemRef.current[index] == el)} onPress={() => handleSelectLanguage(index)} className={`flex-row w-[48%] items-center justify-center p-2 py-4 rounded-lg border ${activeIndex === index ? 'bg-blue-900 border-blue-900' : 'bg-white border-blue-900'}`}>
          <Text className={`${activeIndex === index ? 'text-white text-xl font-bold' : 'text-blue-900 text-xl font-bold'}`}>{item.title}</Text>
          </TouchableOpacity>
         ))}
    </View>
  )
}