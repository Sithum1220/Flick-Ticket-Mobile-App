import { View, Text, Image,  TouchableOpacity} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

import profilePic from '../../assets/images/profilePic.jpg'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'


const home = () => {
  return (
    <>
        <Stack.Screen options={{ 
           headerTransparent: true,
          headerTitle:"",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} className='ml-5'>
              <View className='flex items-center w-full'>
              <Image source={profilePic} className='w-[65px] h-[65px] rounded-full'/>
                <Text className='inline-block'>Welcome Back,</Text>
              </View>
            </TouchableOpacity>
            
          ),
          headerRight: () => (
             <TouchableOpacity onPress={() => {}} className='mr-5  bg-[#ff7f36] p-3 rounded-xl'>
              <Ionicons name='notifications' size={32} color={Colors.white}/>
             </TouchableOpacity>
          ),
        
        }} />
</>
  )
}  

export default home 