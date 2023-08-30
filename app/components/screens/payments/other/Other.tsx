import {View, ScrollView} from 'react-native';
import React, {FC} from 'react';
import SubHeading from '../../../ui/SubHeading';
import {useTailwind} from 'tailwind-rn';
import OtherItem from './item/OtherItem';
import {otherItem} from './data';

const Other: FC = () => {
  const tw = useTailwind();
  return (
    <View>
      <SubHeading text="Important transfers" />
      <ScrollView
        style={tw('mt-5')}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {otherItem.map(item => (
          <OtherItem key={item.title} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Other;
