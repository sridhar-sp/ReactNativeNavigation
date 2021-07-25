import {Item} from '../../common/components/GridList';

export type RootStackParamList = {
  StackScreenOne: BaseStackScreenProps;
  StackScreenTwo: BaseStackScreenProps;
  StackScreenThree: BaseStackScreenProps;
  StackScreenFour: BaseStackScreenProps;
  StackScreenFive: BaseStackScreenProps;
  StackScreenSix: BaseStackScreenProps;
};

export type BaseStackScreenProps = {
  title: string;
  navigationList: Array<Item>;
  navigationType?: string;
};
