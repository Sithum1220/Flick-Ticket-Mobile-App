import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function SignInMethod(props:any) {
  return (
    <View className='w-full mt-8'>
    <TouchableOpacity
        className={"p-4 bg-gray-200 border-gray-400 border rounded-xl flex items-center flex-row justify-center gap-4"}
        onPress={props.onPress}
      >
        <Image source={props.image} className='w-8 h-8'/>
        <Text className="text-xl text-gray-600">{props.title}</Text>
      </TouchableOpacity>
  </View>
  )
}