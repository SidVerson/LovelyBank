import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {useTailwind} from 'tailwind-rn';

const Padding: FC<{style?: any}> = ({children, style = {}}) => {
  const tw = useTailwind();
  return <View style={{...tw('px-4'), ...style}}>{children}</View>;
};

export default Padding;
