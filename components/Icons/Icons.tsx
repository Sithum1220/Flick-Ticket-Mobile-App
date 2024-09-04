// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
import React from 'react';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';

type IconComponentType = React.ComponentType<IconProps<any>>;

interface TabBarIconProps extends IconProps<any> {
  IconComponent: IconComponentType;

}

export function Icons({ IconComponent, style, ...rest }: TabBarIconProps) {
  return <IconComponent size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}