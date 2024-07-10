import { View, Text, Image, TouchableOpacity, ScrollView, ListRenderItem } from 'react-native'
import React, { useState } from 'react'
import { MovieTypes } from '@/types/recentMovieTypes'
import RecentMovies from '@/data/recent-movies.json'


export default function RecentMovieCard() {
    
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
        gap: 20,
        paddingVertical: 30,
        marginBottom: 0
      }}>
         {RecentMovies.map((item,index) => ( 
          <TouchableOpacity key={index}  onPress={() => {}} >
                <Image source={{uri: item.image}} className='w-[328] h-48 rounded-xl' /> 
          </TouchableOpacity>
         ))}
      </ScrollView>
  )
}

