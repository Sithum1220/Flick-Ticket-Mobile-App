import { View, Text, Image, TouchableOpacity, ScrollView, ListRenderItem } from 'react-native'
import RecentMovies from '@/data/recent-movies.json'


export default function RecentMovieCard() {
    
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
        gap: 20,
        paddingVertical: 30,
        marginBottom: 0
      }}>
         {RecentMovies.map((item,index) => ( 
        <View key={index}>
                <Image source={{uri: item.image}} className='w-[328] h-48 rounded-xl'/> 
                <View className='flex justify-between items-center flex-row px-2 py-1 w-full bg-custom-dark-transparent absolute bottom-0 rounded-b-xl'>
                    <View>
                    <Text className='text-lg text-white font-bold'>{item.title}</Text>
                    <Text className='text-sm text-white '>{item.bookingOpenDate}</Text>
                    </View>
                    <TouchableOpacity key={index}  onPress={() => {}} >
                    <View className='bg-[#1D31A5] pb-[2] px-2 rounded-2xl'>
                        <Text className='text-white'>Book Now</Text>
                    </View>
                     </TouchableOpacity>
                </View>
                <View className='bg-[#1D31A5] pb-[2] p-1 px-2 rounded-lg absolute top-0 mt-2 ml-2'>
                        <Text className='text-white font-bold'>Upcoming Movies</Text>
                </View>
        </View>
         ))}
      </ScrollView>
  )
}

