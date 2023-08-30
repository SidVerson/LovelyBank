import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {TypeCurrency} from '../types';
import {useTailwind} from 'tailwind-rn';
import Icon from 'react-native-vector-icons/FontAwesome';

const Currency: FC<{currency: TypeCurrency}> = ({currency}) => {
  const tw = useTailwind();
  return (
    <View
      style={tw(
        'rounded-full bg-blue-500 w-9 h-9 items-center justify-center',
      )}>
      <View
        style={{
          ...tw('rounded-full  w-6 h-6 items-center justify-center'),
          backgroundColor: '#EDF4FE',
        }}>
        <Icon
          name={currency === 'RUB' ? 'rub' : 'usd'}
          size={13}
          color="#488CF9"
        />
      </View>
    </View>
  );
};

export default Currency;
