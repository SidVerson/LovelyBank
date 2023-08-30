import {Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import {IContact} from './types';
import {useTailwind} from 'tailwind-rn';
import Avatar from '../../../ui/Avatar';
import {handleTransfer} from '../handleTransfer';
import {useAccounts} from '../../home/accounts/useAccounts';

const ContactItem: FC<{contact: IContact}> = ({contact}) => {
  const {accounts} = useAccounts();

  const tw = useTailwind();
  return (
    <Pressable
      style={tw('ml-4 mr-1 items-center')}
      onPress={handleTransfer.bind(this, accounts[0], contact.cardNumber)}>
      <Avatar size="large" name={contact.displayName} />
      <Text style={tw('mt-1 text-xs')}>{contact.displayName}</Text>
    </Pressable>
  );
};

export default ContactItem;
