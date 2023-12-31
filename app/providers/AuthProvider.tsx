import {addDoc, collection} from '@firebase/firestore';
import {User, onAuthStateChanged} from 'firebase/auth';
import React, {FC, createContext, useEffect, useMemo, useState} from 'react';
import {Alert} from 'react-native';
import {auth, db, login, logout, register} from '../firebase';

interface IContext {
  user: User | null;
  isLoading: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const {user} = await register(email, password);

      await addDoc(collection(db, 'users'), {
        _id: user.uid,
        displayName: 'No name',
      });
    } catch (error: any) {
      Alert.alert('Error reg:', error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (error: any) {
      Alert.alert('Error login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (error: any) {
      Alert.alert('Error logout:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(
    () =>
      onAuthStateChanged(auth, user => {
        setUser(user || null);
        setLoadingInitial(false);
      }),
    [],
  );

  const value = useMemo(
    () => ({
      user,
      isLoading,
      login: loginHandler,
      logout: logoutHandler,
      register: registerHandler,
    }),
    [user, isLoading],
  );
  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  );
};
