import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React, {FC} from 'react';
import {useTailwind} from 'tailwind-rn';

const SupportHeader: FC = () => {
  const tw = useTailwind();
  const supportPicture: ImageSourcePropType = require('../../../../assets/img/supportPicture.png');
  return (
    <View style={tw('flex-row items-center py-1 mb-2 -mt-4 ')}>
      <Image
        source={supportPicture}
        style={tw('mr-2 rounded-full w-11 h-11')}
      />
      <View>
        <Text style={tw('text-sm text-gray-800 font-medium')}>Support</Text>
        <Text style={tw('text-xs text-gray-500')}>We are here 24/7</Text>
      </View>
    </View>
  );
};

export default SupportHeader;
