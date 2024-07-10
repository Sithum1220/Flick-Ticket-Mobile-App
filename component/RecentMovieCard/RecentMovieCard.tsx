import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import RecentMovies from '../../data/recent-movies.json'

export default function RecentMovieCard() {
  return (
    <View>
    <ScrollView className=''>
      {RecentMovies.map((item,index) => (
        <TouchableOpacity key={index} onPress={() => {}} className='flex justify-center items-center'>
        <Image source={{uri: item.image}} className='w-full h-48 m-4 rounded-lg'/>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
  )
}