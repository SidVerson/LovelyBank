import {useEffect, useState} from 'react';
import {ICurrency} from './types';
import {Alert} from 'react-native';
import {URL} from './API';

export const useCurrencies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}`);
        const result = await response.json();

        console.log({
          name: 'USD',
          value: (1 / result.data.USD.value).toFixed(2),
        });

        setCurrencies([
          {
            name: 'USD',
            value: (1 / result.data.USD.value).toFixed(2),
          },
          {
            name: 'EUR',
            value: (1 / result.data.EUR.value).toFixed(2),
          },
          {
            name: 'GBP',
            value: (1 / result.data.GBP.value).toFixed(2),
          },
        ]);
      } catch (error: any) {
        Alert.alert('Fetch currencies', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {isLoading, currencies};
};
