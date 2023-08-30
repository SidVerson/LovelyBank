import {Text} from 'react-native';
import React, {FC} from 'react';
import Layout from '../../layout/Layout';
import Header from './Header';
import Stories from './stories/Stories';
import Accounts from './accounts/Accounts';
import ApplyNewProduct from './applyNewProducts/ApplyNewProduct';

const Home: FC = () => {
  return (
    <Layout>
      <Header />
      <Stories />
      <Accounts />
      <ApplyNewProduct />
    </Layout>
  );
};

export default Home;
