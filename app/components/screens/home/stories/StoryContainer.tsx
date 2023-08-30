import React, {FC} from 'react';
import {useData} from '../../../../hooks/useData';
// @ts-ignore
import {StoryContainer as SC} from 'react-native-stories-view';
import {useTailwind} from 'tailwind-rn';

const StoryContainer: FC = () => {
  const tw = useTailwind();
  const {activeStories, setActiveStories} = useData();

  return (
    activeStories && (
      <SC
        visible
        progressIndex={0}
        enableProgress
        images={activeStories}
        duration={30}
        barHeight={8}
        onComplete={() => setActiveStories(null)}
        containerStyle={tw('w-full h-full')}
        userProfile={{
          userName: 'Lovely Bank',
          userMessage: 'Your money, our love',
        }}
      />
    )
  );
};

export default StoryContainer;
