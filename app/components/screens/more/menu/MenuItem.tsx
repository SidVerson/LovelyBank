import {View, Text, Pressable, Linking} from 'react-native';
import React, {FC} from 'react';
import {IMoreItem} from './types';
import {useTailwind} from 'tailwind-rn';
import {BOX_SHADOW} from '../../../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MenuItem: FC<{item: IMoreItem}> = ({item}) => {
  const tw = useTailwind();
  return (
    <Pressable
      style={{
        ...tw('mt-4 flex-row bg-white p-4 rounded-2xl justify-between'),
        ...BOX_SHADOW,
      }}
      onPress={() => Linking.openURL(item.link)}>
      <View style={tw('w-10/12')}>
        <Text style={tw('text-xl text-gray-800 font-bold')}>{item.title}</Text>
        <Text style={{...tw('mt-1 text-gray-500 opacity-90'), fontSize: 13}}>
          {item.description}
        </Text>
      </View>
      <View
        style={tw(
          'rounded-full bg-blue-500 w-9 h-9 items-center justify-center',
        )}>
        <Icon name={item.iconName} size={22} color="#EDF4FE" />
      </View>
    </Pressable>
  );
};

export default MenuItem;
