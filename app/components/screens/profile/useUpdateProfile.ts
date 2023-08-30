import {useState} from 'react';
import {useAuth} from '../../../hooks/useAuth';
import {Alert} from 'react-native';
import {doc, updateDoc} from 'firebase/firestore';
import {db} from '../../../firebase';

export const useUpdateProfile = (name: string, docId: string) => {
  const {user} = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateProfile = async () => {
    setIsLoading(true);

    if (!user) return;

    try {
      const docRef = doc(db, 'users', docId);
      await updateDoc(docRef, {
        displayName: name,
      });
      setIsSuccess(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (error: any) {
      Alert.alert('Error updating profile', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {isLoading, updateProfile, isSuccess};
};
