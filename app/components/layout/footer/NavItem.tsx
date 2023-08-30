import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import {IFooterItem} from './types';
import {useTailwind} from 'tailwind-rn';
import Icon from 'react-native-vector-icons/AntDesign';
import {TypeRootStackParamList} from '../../../navigation/types';

interface INavItem {
  item: IFooterItem;
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string;
}

const NavItem: FC<INavItem> = ({item, navigate, currentRoute}) => {
  const isActive = currentRoute === item.title;
  const tw = useTailwind();
  return (
    <Pressable
      style={{...tw('items-center'), width: '20%'}}
      onPress={() => navigate(item.title)}>
      <Icon
        name={item.iconName}
        style={tw(`text-xl ${isActive ? 'text-blue-500' : 'text-gray-500'}`)}
      />
      <Text
        style={{
          ...tw(`text-xs ${isActive ? 'text-blue-500' : 'text-gray-500'}`),
          marginTop: 1,
        }}>
        {item.title}
      </Text>
    </Pressable>
  );
};

export default NavItem;
