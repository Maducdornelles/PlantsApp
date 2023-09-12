import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Image, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import Card from '../../components/Card';
import Page from '../../components/Page';
import { SHeader, SWrapper } from './styles';
import Heading from '../../components/Heading';
import Link from '../../components/Link';
import IconByImage from '../../components/Icon';
import { getImage } from '../../utils/icons';
import SectionNav from '../../components/SectionNav';

const getEmailUsername = (email) => {
  if (email) {
    // Extrai o nome de usuário do campo de email
    const username = email.split('@')[0];
    return username;
  } else {
    return 'user'; // Valor padrão caso o email não esteja definido
  }
};

export default ({ navigation }) => {
  const [apiData, setApiData] = useState({
    mostPopular: [],
    items: [],
    email: '', // Defina o campo de email aqui
  });

  const fetchDataFromApi = async () => {
    try {
      const response = await axios.get('https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev/');
      return response.data.body.data;
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      return {
        mostPopular: [],
        items: [],
        email: '', // Defina o campo de email aqui
      };
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromApi();
      setApiData(data);
    };

    fetchData();
  }, []);

  return (
    <Page>
      <SWrapper style={{ marginTop: 80 }}>
        <SHeader>
          <Heading level="medium">
            Hi, {getEmailUsername(apiData.email)}
          </Heading>
          <Link.Root
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            to="Favorite"
            onPress={() => {}}
          >
            <IconByImage icon="user" size={30} resizeMode="cover" />
          </Link.Root>
        </SHeader>
      </SWrapper>
      <SWrapper style={{ marginTop: 40, marginBottom: 24 }}>
        <Heading level="medium">
          Most popular
        </Heading>
      </SWrapper>
      <SWrapper style={{ maxWidth: '100%', marginBottom: 16 }}>
        <ScrollView style={{ height: 145 }} horizontal={true}>
          <View
            style={{
              paddingLeft: '3.8%',
              marginRight: 44,
              flexDirection: 'row',
              gap: 16,
            }}
          >
            {apiData.mostPopular.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  navigation.navigate('Details', { plant: item });
                }}
              >
                <Card.Root
                  width={287}
                  height={140}
                  direction="horizontal"
                >
                  <Image source={{ uri: item.image }} style={{ width: '50%', height: '100%' }} />
                  <Card.Description>
                    <Card.Title>
                      {item.title}
                    </Card.Title>
                    <Card.Price value={item.price} />
                  </Card.Description>
                </Card.Root>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SWrapper>
      <SWrapper>
        <SectionNav.Root
          actualSection="all"
          sections={['all', 'indoor', 'outdoor']}
        >
          <SectionNav.Section sectionId="all">
            <SafeAreaView>
              <ScrollView>
                <View
                  style={{
                    gap: 16,
                    marginBottom: 48,
                  }}
                >
                  {apiData.items.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => {
                        navigation.navigate('Details', { plant: item });
                      }}
                    >
                      <Card.Root
                        width={'100%'}
                        height={302}
                        direction="vertical"
                      >
                        <Image source={{ uri: item.image }} style={{ width: '100%', height: '70%' }} />
                        <Card.Description>
                          <Card.Title>
                            {item.title}
                          </Card.Title>
                          <Card.Price value={item.price} />
                        </Card.Description>
                      </Card.Root>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </SafeAreaView>
          </SectionNav.Section>
          <SectionNav.Section sectionId="indoor">
            <SafeAreaView>
              <ScrollView>
                <View
                  style={{
                    gap: 16,
                    marginBottom: 48,
                  }}
                >
                  {apiData.items.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => {
                        navigation.navigate('Details', { plant: item });
                      }}
                    >
                      <Card.Root
                        width={'100%'}
                        height={302}
                        direction="vertical"
                      >
                        <Image source={{ uri: item.image }} style={{ width: '100%', height: '70%' }} />
                        <Card.Description>
                          <Card.Title>
                            {item.title}
                          </Card.Title>
                          <Card.Price value={item.price} />
                        </Card.Description>
                      </Card.Root>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </SafeAreaView>
          </SectionNav.Section>
          <SectionNav.Section sectionId="outdoor">
            <SafeAreaView>
              <ScrollView>
                <View
                  style={{
                    gap: 16,
                    marginBottom: 48,
                  }}
                >
                  {apiData.items.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => {
                        navigation.navigate('Details', { plant: item });
                      }}
                    >
                      <Card.Root
                        width={'100%'}
                        height={302}
                        direction="vertical"
                      >
                        <Image source={{ uri: item.image }} style={{ width: '100%', height: '70%' }} />
                        <Card.Description>
                          <Card.Title>
                            {item.title}
                          </Card.Title>
                          <Card.Price value={item.price} />
                        </Card.Description>
                      </Card.Root>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </SafeAreaView>
          </SectionNav.Section>
        </SectionNav.Root>
      </SWrapper>
    </Page>
  );
};
