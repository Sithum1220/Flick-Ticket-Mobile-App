import { View, Text, TouchableOpacity, Switch } from "react-native";
import { Icons } from "../Icons/Icons";
import { Colors } from "@/constants/Colors";

export default function ProfileSettingOption(props: any) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View className="justify-between flex-row items-center">
        <View className="flex-row items-center gap-4">
          <Icons
            size={28}
            IconComponent={props.IconComponent}
            name={props.name}
            color={Colors.text.gray}
          />
          <Text>{props.title}</Text>
        </View>
        <View>
          {props.showArrowIcon ? (
            <Icons
              size={20}
              IconComponent={props.ArrowIconComponent}
              name={'caret-right'}
              color={Colors.text.gray}
            />
          ) : (
            <Switch
              value={props.switchValue}
              trackColor={{false: '#767577', true: ''}}
              onValueChange={props.onSwitchChange}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
