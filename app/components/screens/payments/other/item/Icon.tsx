import {View} from 'react-native';
import React, {FC} from 'react';
import {IFooterItem} from '../../../../layout/footer/types';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTailwind} from 'tailwind-rn';

interface IIcon extends Pick<IFooterItem, 'iconName'> {}

const IconOther: FC<IIcon> = ({iconName}) => {
  const tw = useTailwind();
  return (
    <View
      style={tw(
        'rounded-full bg-blue-500 w-8 h-8 items-center justify-center',
      )}>
      <Icon name={iconName} size={19} color="#EDF4FE" />
    </View>
  );
};

export default IconOther;
