import { View, Text, Image,  TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import profilePic from '../../assets/images/profilePic.jpg'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import {useHeaderHeight} from '@react-navigation/elements'

const home = () => {
  const headerHeight = useHeaderHeight();
  return (
    <>
    <Stack.Screen options={{ 
          headerTransparent: true,
          headerTitle: "",
    }}/>
        <View className="bg-white p-4 pt-[15%]">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Image
            source={profilePic}
            className="w-[65px] h-[65px] rounded-full"
          />
          <View className="ml-[5%]">
            <Text className="text-lg text-gray-500">Welcome Back,</Text>
            <Text className="text-2xl font-bold">Minato Namikaza</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View className="bg-red-400 p-2 rounded-lg">
          <Ionicons name='notifications' size={24} color={Colors.white} />
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center bg-gray-200 rounded-xl mt-[6%] px-4 py-4">
        <Ionicons name='search' size={32} color={Colors.primaryColor} />
        <TextInput
          placeholder="Search"
          className="ml-2 flex-1 text-[10pxr] text-gray-700"
        />
      </View>
    </View>
</>
  )
}  

export default home 