import {Alert} from 'react-native';
import React, {FC} from 'react';
import Padding from '../../../ui/Padding';
import {useTailwind} from 'tailwind-rn';
import Button from '../../../ui/Button';
import {asyncAlert} from './asyncAlert';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {db} from '../../../../firebase';
import {useAuth} from '../../../../hooks/useAuth';
import {getRandomCardNumber} from '../../../../utils/getRandomCardNuber';

const ApplyNewProduct: FC = () => {
  const {user} = useAuth();
  const registerHandler = async () => {
    try {
      const currency = await asyncAlert({
        title: 'Currency',
        msg: 'Select account currency',
        buttons: {
          text: 'RUB',
          resolveValue: 'RUB',
          textSecond: 'USD',
          resolveValueSecond: 'USD',
        },
      });
      const cardType = await asyncAlert({
        title: 'Card Type',
        msg: 'Select card type',
        buttons: {
          text: 'Black',
          resolveValue: 'Lovely Black',
          textSecond: 'Platinum',
          resolveValueSecond: 'Lovely Platinum',
        },
      });

      await addDoc(collection(db, 'accounts'), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        balance: 0,
        cardNumber: getRandomCardNumber(),
        currency,
        name: cardType,
      });
    } catch (error: any) {
      Alert.alert('Failed to register new product', error.message);
    }
  };

  const tw = useTailwind();
  return (
    <Padding style={tw('mt-6')}>
      <Button onPress={registerHandler} title="Apply for a new product" />
    </Padding>
  );
};

export default ApplyNewProduct;
