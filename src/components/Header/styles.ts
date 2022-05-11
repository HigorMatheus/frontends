import { TouchableOpacity, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding-top: ${RFValue(1) + getStatusBarHeight()}px;
  /* width: ${RFValue(423)}PX; */
  /* top: ${-RFValue(16)}px; */
  width: 100%;
  height: ${RFValue(340)}px;
  background: #528fbf;
  border-bottom-left-radius: ${RFValue(55)}PX;
  border-bottom-right-radius: ${RFValue(55)}PX;
  padding: ${RFValue(19)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(40)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_500Medium};
  margin-left: ${RFValue(8)}px;
  font-size: ${Platform.OS === 'ios' ? RFValue(24) : 24}px;
  color: #fff;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_400Regular};
  font-size: ${Platform.OS === 'ios' ? RFValue(20) : 20}px;
  color: #fff;
`;

export const ImageContent = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 4,
    height: 4,
  },
  shadowOpacity: 1,
  shadowRadius: 4,

  elevation: 8,
})`
  box-sizing: border-box;
  width: ${Platform.OS === 'ios' ? RFValue(110) : 110}px;
  height: ${Platform.OS === 'ios' ? RFValue(110) : 110}px;
  border-radius: ${RFValue(100)}px;
  background: rgba(151, 151, 151, 0.2);
`;

export const ButtonUpload = styled(TouchableOpacity)`
  box-sizing: border-box;
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: ${RFValue(100)}px;
  background: rgba(151, 151, 151, 0.2);
  border: ${RFValue(1)}px solid #ffffff;
  /* box-shadow: ${RFValue(0)}px ${RFValue(4)}px ${RFValue(4)}px
    rgba(0, 0, 0, 0.25); */
  /* backdrop-filter: blur(4px); */
  align-items: center;
  justify-content: center;
`;
export const SearchContent = styled.View`
  padding: ${RFValue(10)}px;
  height: ${RFValue(50)}px;
  margin-top: ${RFValue(28)}px;
  border-radius: ${RFValue(10)}px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#A0A2B3',
})`
  background-color: #fff;
`;
export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(31)}px;
  justify-content: space-around;
`;

type ButtonMenuProps = {
  active: boolean;
};
export const ButtonMenu = styled(TouchableOpacity)<ButtonMenuProps>`
  height: ${RFValue(51)}px;
  width: ${RFValue(51)}px;
  border-radius: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
  ${({ active }) =>
    active &&
    css`
      border-width: ${RFValue(1)}px;
      border-style: solid;
      border-color: #f1f4f7;
    `}
`;

export const NotificationContent = styled.View`
  margin-bottom: ${Platform.OS === 'ios' ? RFValue(29) : 29}px;
  position: relative;
  margin-left: ${Platform.OS === 'ios' ? RFValue(13) : 4}px;
  width: ${Platform.OS === 'ios' ? RFValue(14) : 12}px;
  /* background-color: #333; */
`;
export const NumNotification = styled.View`
  background-color: #fe2600;
  height: ${RFValue(13)}px;
  width: ${RFValue(13)}px;
  border-radius: ${RFValue(13)}px;
  position: absolute;
  left: ${RFValue(13)}px;
  align-items: center;
  justify-content: center;
`;
export const TextNotification = styled.Text`
  font-size: ${RFValue(10)};
  font-family: ${({ theme }) => theme.fonts.muktaMahee_600SemiBold};
  color: #fff;
  text-align: center;
`;
