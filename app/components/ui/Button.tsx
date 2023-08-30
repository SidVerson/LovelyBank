import {Text, TouchableHighlight} from 'react-native';
import React, {FC} from 'react';
import {useTailwind} from 'tailwind-rn';

interface IButton {
  onPress: () => void;
  title: string;
  colors?: [string, string];
}

const Button: FC<IButton> = ({
  onPress,
  title,
  colors = ['bg-yellow-300', 'bg-yellow-200'],
}) => {
  const tailwind = useTailwind();
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      style={tailwind(
        `${colors[1]} text-gray-800 rounded-xl w-full my-4 py-4 `,
      )}>
      <Text style={tailwind('text-center')}>{title}</Text>
    </TouchableHighlight>
  );
};

export default Button;
