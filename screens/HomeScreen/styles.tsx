import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
`

export const Wrapper = styled.View`
    flex: 100%;
    margin: 24px;
`

export const Header = styled.View`
    flex: 50%;
    width: 100%;
`

export const HeaderTitle = styled.Text`
    color: #000;
    font-family: 'Poppins-Bold';
    font-size: 24px;
    width: 200px;
    overflow: hidden;
    font-style: normal;
    font-weight: 600;
`

export const ProfileContainer = styled.View`
    height: 48px;
    display: flex;
    margin: 40px 0;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
`

export const MostPopularContainer = styled.View`
    display: flex;
    flex: 1;
    gap: 24px;
`

export const MostPopularScrollView = styled.ScrollView`
    flex: 1;
    gap: 16px;
`

export const Product = styled.View`
    flex: 1;
    width: 287px;
    height: 136px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-right: 16px;
    overflow: hidden;
    border-radius: 8px;
`

export const ProductImageContainer = styled.View`
    flex: 50%;
    height: 100%;
`
export const ProductDescriptionContainer = styled.View`
    flex: 50%;
    height: 100%;
    padding: 8px;
    background-color: #fff;
`

export const ProductName = styled.Text`
    color: #000;
    font-family: 'Poppins-Regular';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
`
export const AddToCartButton = styled.TouchableOpacity`
  width: 121px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #418B64;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px; 
`;

export const AddToCartButtonText = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

export const ProductPrice = styled.Text`
    color: #000;
    font-family: 'Poppins-Bold';
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
`

export const Title = styled.Text`
    color: #000;
    font-family: 'Poppins-Bold';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
`

export const ProductList = styled.View`
    flex: 50%;
    width: 100%;
`

export const NavigationBar = styled.View`
    flex: 85px;
    bottom: 0;
    width: 100%;
`