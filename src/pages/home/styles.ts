import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { ListItem } from '.';

const dimensions = Dimensions.get('window');
export const Container = styled.View`
  align-items: center;
  flex: 1;
  background: #bfd3d7;
`;
export const List = styled(FlatList as new () => FlatList<ListItem[]>)`
  width: ${dimensions.width - RFValue(32)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_700Bold};
  margin-top: ${RFValue(28)}px;
  font-size: 18px;
  line-height: 21px;
  color: #17375f;
`;
export const ItemList = styled.View`
  width: 100%;
`;

type ButtonInfoProps = {
  color: string;
};

export const ButtonInfo = styled(TouchableOpacity).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 4,
    height: 4,
  },
  shadowOpacity: 1,
  shadowRadius: 4,

  elevation: 10,
})<ButtonInfoProps>`
  margin-top: ${RFValue(13)}px;
  height: ${RFValue(63)}px;
  border-radius: ${RFValue(10)}px;
  background-color: ${({ color }) => color};
  align-items: center;
  justify-content: center;
`;

export const TextBtn = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_400Regular};
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
`;
