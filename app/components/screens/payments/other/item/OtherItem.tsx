import {Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import {IOtherItem} from '../types';
import IconOther from './Icon';
import {useTailwind} from 'tailwind-rn';
import {BOX_SHADOW} from '../../../../../styles';
import {useAccounts} from '../../../home/accounts/useAccounts';
import {handleTransfer} from '../../handleTransfer';

const CASH_CARD_NUMBER = '3780 5914 9906 6937';

const OtherItem: FC<{item: IOtherItem}> = ({item}) => {
  const {accounts} = useAccounts();
  const tw = useTailwind();
  return (
    <Pressable
      onPress={handleTransfer.bind(this, accounts[0], CASH_CARD_NUMBER)}
      style={{
        ...tw('ml-4 rounded-xl p-2 w-24 h-24 bg-white'),
        ...BOX_SHADOW,
      }}>
      <IconOther iconName={item.iconName} />
      <Text style={{...tw('text-xs'), marginTop: 6}}>{item.title}</Text>
    </Pressable>
  );
};

export default OtherItem;
