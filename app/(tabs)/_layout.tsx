import { Icons } from '@/components/Icons/Icons';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Stack, Tabs } from 'expo-router';


export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        tabBarLabel:"Home",
        
        tabBarIcon: ({ color, focused }) => (
          <Icons IconComponent={Ionicons} name={focused ? 'home' : 'home-outline'} color={color} />
        ),
      }}/>
      <Tabs.Screen name="MyTicket" options={{
        tabBarLabel:"My Ticket",
        tabBarIcon: ({ color, focused }) => (
          <Icons size={24} IconComponent={Ionicons} name={focused ? 'ticket' : 'ticket-outline'} color={color} />
        ),
      }}/>
      <Tabs.Screen name="Favorite" options={{
        tabBarLabel:"Favorite",
        tabBarIcon: ({ color, focused }) => (
          <Icons size={24} IconComponent={MaterialIcons} name={focused ? 'favorite' : 'favorite-outline'} color={color} />
        ),
      }}/>
      <Tabs.Screen name="Profile" options={{
        tabBarLabel:"Profile",
        tabBarIcon: ({ color, focused }) => (
          <Icons size={24} IconComponent={FontAwesome} name={focused ? 'user' : 'user-o'} color={color} />
        ),
      }}/>
    </Tabs>
  );
}
