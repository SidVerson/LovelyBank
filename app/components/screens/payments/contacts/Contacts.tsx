import {View, ScrollView} from 'react-native';
import React, {FC} from 'react';
import {useContacts} from './useContacts';
import {useTailwind} from 'tailwind-rn';
import SubHeading from '../../../ui/SubHeading';
import Loader from '../../../ui/Loader';
import ContactItem from './ContactItem';

const Contacts: FC = () => {
  const tw = useTailwind();
  const {contacts, isLoading} = useContacts();
  return (
    <View style={tw('my-8')}>
      <SubHeading text="Phone Transfers" />
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView
          style={tw('mt-5')}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {contacts.map(c => (
            <ContactItem key={c._id} contact={c} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Contacts;
