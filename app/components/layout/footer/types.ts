import {TypeRootStackParamList} from '../../../navigation/types';
import Icon from 'react-native-vector-icons/AntDesign';


export interface IFooterItem {
  iconName: keyof typeof Icon.glyphMap;
  title: keyof TypeRootStackParamList;
}
