import React, { FC } from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import {
  Container,
  Wrapper,
  Header,
  ProfileContainer,
  HeaderTitle,
  MostPopularContainer,
  Title,
  MostPopularScrollView,
  Product,
  ProductImageContainer,
  ProductDescriptionContainer,
  ProductName,
  ProductPrice,
} from './styles';

interface Product {
  image: any;
  name: string;
  price: number;
}

const productImage = require('../../assets/product-image.jpeg');

const FakeNatty: Product[] = [
  {
    image: productImage,
    name: 'Green Vines',
    price: 9.20,
  },
  {
    image: productImage,
    name: 'Green Vines',
    price: 9.20,
  },
  {
    image: productImage,
    name: 'Green Vines',
    price: 9.20,
  },
  {
    image: productImage,
    name: 'Green Vines',
    price: 9.20,
  },
  {
    image: productImage,
    name: 'Green Vines',
    price: 9.20,
  },
];

const HomeScreen: FC<any> = ({ navigation }) => {
  function showUserName(userName: string) {
    if (userName.length <= 8) return userName;
    userName = `${userName.slice(0, 7)}...`;
    return userName;
  }

  return (
    <Container>
      <Header>
        <Wrapper style={{ marginTop: 44 }}>
          <ProfileContainer>
            <HeaderTitle>
              Hi, {showUserName('John :3')}
            </HeaderTitle>
            <TouchableOpacity onPress={() => navigation.navigate('LoginFirst')}>
              <Image width={30} height={30} source={require('../../assets/user-icon.png')} />
            </TouchableOpacity>
          </ProfileContainer>
          <MostPopularContainer>
            <Title>Most popular</Title>
            <MostPopularScrollView horizontal={true}>
              {FakeNatty.map((product, index) => (
                <Product
                  width={287}
                  height={136}
                  radius={8}
                  shadowColor="#000"
                  shadowOpacity={0.25}
                  shadowRadius={4}
                  elevation={4}
                  key={index}
                >
                  <ProductImageContainer>
                    <Image style={{ width: '100%', height: '100%' }} source={product.image} />
                  </ProductImageContainer>
                  <ProductDescriptionContainer>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>$ {product.price.toFixed(2)}</ProductPrice>
                    <TouchableOpacity style={{
                      width: 121,
                      height: 20,
                      flexShrink: 0,
                      borderRadius: 8,
                      bottom: -53,
                      backgroundColor: '#418B64',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                      <Text style={{ color: '#fff' }}>Add to Cart</Text>
                    </TouchableOpacity>
                  </ProductDescriptionContainer>
                </Product>
              ))}
            </MostPopularScrollView>
          </MostPopularContainer>
        </Wrapper>
      </Header>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 35 }}>
        <TouchableOpacity>
          <Text style={{
            color: '#000',
            fontFamily: 'Poppins-Regular',
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 24,
            marginTop: -450,
            marginLeft: 27
          }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
            color: '#969595',
            fontFamily: 'Poppins-Regular',
            fontSize: 20,
            fontWeight: '500',
            lineHeight: 24,
            marginTop: -450,
          }}>
            Indoor
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
            color: '#969595',
            fontFamily: 'Poppins-Regular',
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 24,
            marginTop: -450,
            marginLeft: 27,
            marginRight: 27,
          }}>
            Outdoor
          </Text>
        </TouchableOpacity>
      </View>
      {/* Resto do seu código */}
    </Container>
  );
};

export default HomeScreen;
