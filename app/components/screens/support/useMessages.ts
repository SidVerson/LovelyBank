import {useEffect, useState} from 'react';
import {IMessage} from './types';
import {collection, onSnapshot, query} from 'firebase/firestore';
import {db} from '../../../firebase';
import dayjs from 'dayjs';

export const useMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () =>
      onSnapshot(query(collection(db, 'messages')), snapshot => {
        setMessages(
          snapshot.docs.map(d =>
            d.data()?.timestamp
              ? ({
                  _id: d.id,
                  ...d.data(),
                  timestamp: dayjs
                    .unix(d.data()?.timestamp.seconds)
                    .format('HH:mm:ss'),
                } as IMessage)
              : ({
                  _id: d.id,
                  ...d.data(),
                } as IMessage),
          ),
        );

        setIsLoading(false);
      }),
    [],
  );

  return {messages, isLoading};
};
