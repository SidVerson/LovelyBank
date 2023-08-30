import Icon from 'react-native-vector-icons/MaterialIcons';

export interface IService {
  iconName: keyof typeof Icon.glyphMap;
  title: string;
  percent: number;
}
