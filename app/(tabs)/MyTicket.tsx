import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { AntDesign, Feather } from '@expo/vector-icons'
import MyTicketButton from '@/components/MyTicketButton/MyTicketButton'
import MyTickets from '@/components/MyTickets/MyTicket'
import { Colors } from '@/constants/Colors'

export default function MyTicket() {
  const router = useRouter();
  return (
    <>
    <Stack.Screen
         options={{
           headerTitle: "My Tickets",
           headerTitleStyle: {
             fontSize: 25,
             fontWeight: 'bold',
           },
          
           headerRight: () => (
             <TouchableOpacity onPress={() => {}}>
               <View className='mr-3 p-1 rounded-lg'>
               <AntDesign name="calendar" size={28}  color="black" />
               </View>
             </TouchableOpacity>
           )
         }}
       />
       <View className='bg-white flex p-4'>
         <MyTicketButton />
         <MyTickets />
       </View>
     </>
  )
}