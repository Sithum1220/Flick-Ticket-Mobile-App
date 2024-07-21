import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { Icons } from '@/components/Icons/Icons';

export default function Input(props: any) {
  return (
    <View className={`${props.mt}`+' flex-row items-center bg-gray-100 rounded-xl p-4'}>
        <Icons IconComponent={props.IconComponent} name={props.IconName} size={props.IconSize} color={props.IconColor}/>
        <TextInput
          placeholder={props.placeHolder}
          className="ml-3 flex-1 text-[16px] text-gray-700"
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
        />
    </View>
  )
}