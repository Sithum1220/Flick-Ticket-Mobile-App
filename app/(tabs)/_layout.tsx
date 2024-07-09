import React from 'react'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'

export default function _layout() {
  return (
    <Tabs screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.bgColor,
          borderTopWidth: 0,
          padding: 0,
          height: 70,
          paddingBottom: 20
        },
        tabBarLabelStyle: {
          fontSize: 14
        }
      }}>
      <Tabs.Screen name='index'  options={{tabBarLabel: "Home",tabBarIcon: ({color}) => (
        <Ionicons name='home' size={24} color={ color } />
      )}} /> 
      <Tabs.Screen name='my_ticket' options={{tabBarLabel: "My Ticket", tabBarIcon: ({color}) => (
        <Ionicons name='ticket' size={24} color={ color } />
      )}} />
      <Tabs.Screen name='favorite' options={{tabBarLabel: "Favorite", tabBarIcon: ({color}) => (
       <MaterialIcons name="favorite" size={24} color={ color } />
      )}} />
      <Tabs.Screen name='profile' options={{tabBarLabel: "Profile", tabBarIcon: ({color}) => (
       <FontAwesome name="user" size={24} color={ color } />
      )}}/>
     </Tabs>
  )
}