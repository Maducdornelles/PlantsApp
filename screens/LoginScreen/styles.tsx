import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const BannerImage = styled.View`
  width: 100%;
  height: 55%;
`;

export const FormContainer = styled.View`
  flex: 1;
  padding: 25px;
  gap: 16px;
  background-color: #ffffff; /* Defina uma cor de fundo se desejar */
`;

export const Title = styled.Text`
  font-size: 50px;
  font-family: 'Poppins-Bold';
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 0px;
  text-align: left;
`;

export const SubTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 48px;
  background-color: #418B64;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'SourceSans-Regular';
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  color: #fff;
  text-align: center;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
`;
