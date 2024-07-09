import React from 'react'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Tabs>
    <Tabs.Screen name='index' options={{tabBarIcon: ({color}) => (
      <Ionicons name='home' size={38} color={ color } />
    )}} /> 
    <Tabs.Screen name='my_ticket' options={{tabBarIcon: ({color}) => (
      <Ionicons name='ticket' size={38} color={ color } />
    )}} />
    <Tabs.Screen name='favorite' options={{tabBarIcon: ({color}) => (
     <MaterialIcons name="favorite" size={38} color={ color } />
    )}} />
    <Tabs.Screen name='profile' options={{tabBarIcon: ({color}) => (
     <FontAwesome name="user" size={38} color={ color } />
    )}}/>
   </Tabs>
  )
} 