import React, {FC} from 'react';
import {useTailwind} from 'tailwind-rn';
import Padding from '../../ui/Padding';
import Avatar from '../../ui/Avatar';
import {Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useProfile} from '../profile/useProfile';
import Loader from '../../ui/Loader';
import Stories from './stories/Stories';

const Header: FC = () => {
  const {isLoading, name} = useProfile();
  const {navigate} = useNavigation();
  const tw = useTailwind();
  // eslint-disable-next-line prettier/prettier
  return isLoading ? (
    <Loader />
  ) : (
    <Padding style={tw('flex-row items-center')}>
      <Avatar name={name} />
      <TouchableOpacity
        onPress={() => navigate('Profile')}
        style={tw('flex-row items-end')}>
        <Text style={tw('text-2xl text-gray-800 font-bold')}>{name}</Text>
        <Image
          source={{
            uri: 'https://cdn.iconscout.com/icon/free/png-256/free-right-arrow-1438234-1216195.png?f=webp',
          }}
          style={{width: 28, height: 28}}
        />
      </TouchableOpacity>
    </Padding>
  );
};

export default Header;
