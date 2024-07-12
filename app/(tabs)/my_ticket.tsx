import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import Colors from '@/constants/Colors'
import MyTicketButton from '@/component/MyTicketButton/MyTicketButton';
import MyTicketCard from '@/component/MyTickets/MyTicket';

const MyTicket = () => {
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
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <View className='mr-2 ml-4 bg-black p-1 rounded-lg'>
                <Feather name='arrow-left' size={28} color={Colors.white} />
              </View>
            </TouchableOpacity>
          ),
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
        <MyTicketCard />
      </View>
    </>
  )
}

export default MyTicket