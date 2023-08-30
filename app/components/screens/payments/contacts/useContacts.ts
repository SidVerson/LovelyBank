import {useEffect, useState} from 'react';
import {IContact} from './types';
import {useAuth} from '../../../../hooks/useAuth';
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import {db} from '../../../../firebase';
import {IProfile} from '../../profile/useProfile';

export const useContacts = () => {
  const {user} = useAuth();
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'accounts'), where('userId', '!=', user?.uid)),
        async snapshot => {
          const contactsFire = await Promise.all(
            snapshot.docs.map(async d => {
              const data = d.data() as IContact & {userId: string};

              let displayName = '';
              let cardNumber = data.cardNumber;

              const q = query(
                collection(db, 'users'),
                where('_id', '==', data.userId),
              );

              const querySnapshot = await getDocs(q);

              querySnapshot.forEach(doc => {
                displayName = (doc.data() as IProfile).displayName;
              });

              return {
                ...d.data,
                _id: d.id,
                displayName,
                cardNumber,
              };
            }),
          );

          setContacts(
            contactsFire
              .filter(
                (v, i, a) =>
                  a.findIndex(t => t.displayName === v.displayName) === i,
              )
              .filter(i => i.displayName),
          );

          setIsLoading(false);
        },
      ),

    [user?.uid],
  );
  return {contacts, isLoading};
};
