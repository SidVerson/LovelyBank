import {AuthProvider} from './app/providers/AuthProvider';
import Navigation from './app/navigation/Navigation';
import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {DataProvider} from './app/providers/DataProvider';
import StoryContainer from './app/components/screens/home/stories/StoryContainer';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <AuthProvider>
        <DataProvider>
          <StoryContainer />
          <Navigation />
        </DataProvider>
      </AuthProvider>
    </TailwindProvider>
  );
}
