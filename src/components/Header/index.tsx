import React from 'react';
import { View } from 'react-native';
import { IconName, Icons } from '../../assets/icons';
import {
  Container,
  Content,
  ButtonUpload,
  Title,
  UserName,
  Input,
  ButtonMenu,
  ButtonsContainer,
  TextNotification,
  NotificationContent,
  NumNotification,
  SearchContent,
} from './styles';

type MenuHeader = {
  id: number;
  icon: IconName;
  active: boolean;
};

export function Header() {
  const menu: MenuHeader[] = [
    {
      id: 1,
      icon: 'home-outline',
      active: false,
    },
    {
      id: 2,
      icon: 'calendar',
      active: true,
    },
    {
      id: 3,
      icon: 'star',
      active: false,
    },
    {
      id: 4,
      icon: 'layers-outline',
      active: false,
    },
    {
      id: 5,
      icon: 'config',
      active: false,
    },
  ];
  return (
    <Container>
      <Content>
        {/* <ImageContent> */}
        <ButtonUpload>
          <Icons name="photo-plus" />
        </ButtonUpload>
        {/* </ImageContent> */}

        <Title>
          Seja bem vindo(a)!{'\n'}
          <UserName>Artur Aguiar Ferreira</UserName>
        </Title>
        <NotificationContent>
          <Icons name="notification" />
          <NumNotification>
            <TextNotification>2</TextNotification>
          </NumNotification>
        </NotificationContent>
      </Content>
      <SearchContent>
        <Input placeholder="Pesquise médicos, categorias . ." />
        <Icons name="search" />
      </SearchContent>

      <ButtonsContainer>
        {menu.map(item => (
          <View key={item.id}>
            <ButtonMenu active={item.active}>
              <Icons name={item.icon} />
            </ButtonMenu>
          </View>
        ))}
      </ButtonsContainer>
    </Container>
  );
}
