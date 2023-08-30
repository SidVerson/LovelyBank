import {View, ScrollView} from 'react-native';
import React, {FC} from 'react';
import {useStories} from './useStories';
import {useTailwind} from 'tailwind-rn';
import Loader from '../../../ui/Loader';
import StoryItem from './StoryItem';

const Stories: FC = () => {
  const tw = useTailwind();
  const {stories, isLoading} = useStories();
  return (
    <View style={tw('my-7')}>
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {stories.map(story => (
            <StoryItem key={story._id} story={story} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Stories;
