import { View, Text } from 'react-native'
import React from 'react'
import Input from '../Input/Input'

export default function LoginInputs(props:any) {
  return (
    <View className='pt-6'>
        <Text className='text-lg font-semibold'>{props.title}</Text>
        <Input mt={props.mt} type={props.type} secureTextEntry={props.secureTextEntry} keyboardType={props.keyboardType} IconComponent={props.IconComponent} IconColor={props.IconColor} IconName={props.IconName} IconSize={props.IconSize} placeHolder={props.placeHolder}/>
    </View>
  )
}