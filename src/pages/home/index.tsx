import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Header } from '../../components/Header';
import { ButtonInfo, Container, ItemList, TextBtn, Title } from './styles';

export type ListItem = {
  id: number;
  text: string;
  textButton: string;
  color: string;
};

const dimensions = Dimensions.get('window');
export function Home() {
  const itens: ListItem[] = [
    {
      id: 1,
      text: 'Cuide-se',
      textButton: 'Solicite uma consulta médica',
      color: '#17375F',
    },
    {
      id: 2,
      text: 'Busca uma especialidade?',
      textButton: 'Especialistas',
      color: '#FDC75F',
    },
    {
      id: 3,
      text: 'Marcar exames',
      textButton: 'Exames',
      color: '#EA504C',
    },
    {
      id: 4,
      text: 'Mais',
      textButton: 'Serviços',
      color: '#528FBF',
    },
  ];
  return (
    <Container>
      <Header />
      <FlatList
        data={itens}
        keyExtractor={item => item.color}
        indicatorStyle="black"
        showsVerticalScrollIndicator={false}
        style={{
          width: dimensions.width - RFValue(32),
          marginBottom: RFValue(16),
        }}
        renderItem={({ item }) => (
          <ItemList>
            <Title>{item.text}</Title>
            <ButtonInfo color={item.color}>
              <TextBtn>{item.textButton}</TextBtn>
            </ButtonInfo>
          </ItemList>
        )}
      />
    </Container>
  );
}
