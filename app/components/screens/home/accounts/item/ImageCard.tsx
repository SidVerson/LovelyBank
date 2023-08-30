import {Text, ImageBackground, ImageSourcePropType} from 'react-native';
import React, {FC} from 'react';
import {IAccount} from '../types';
import {useTailwind} from 'tailwind-rn';

const ImageCard: FC<{account: IAccount}> = ({account: {name, cardNumber}}) => {
  const tw = useTailwind();
  const imageBlack: ImageSourcePropType = require('../../../../../../assets/img/cardBlack.png');
  const imagePlatinum: ImageSourcePropType = require('../../../../../../assets/img/cardPlatinum.webp');
  return (
    <ImageBackground
      source={name === 'Lovely Black' ? imageBlack : imagePlatinum}
      resizeMode="contain"
      style={{...tw('justify-end w-14 h-10'), padding: 4.5}}>
      <Text style={{...tw('text-white font-medium'), fontSize: 11}}>
        {cardNumber.slice(-4)}
      </Text>
    </ImageBackground>
  );
};

export default ImageCard;
