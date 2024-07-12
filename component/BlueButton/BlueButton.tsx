import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function BlueButton(props) {
  return (
    <View className='mt-[2%] mb-[3%]'>
          <TouchableOpacity className='bg-[#1D31A5] p-3 rounded-xl flex items-center' onPress={() => {}}>
              <Text className='text-lg text-white font-bold'>{props.name}</Text>
            </TouchableOpacity>
    </View>
  )
}