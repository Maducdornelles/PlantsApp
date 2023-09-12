import { styled } from 'styled-components/native';

export const SProductContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ECF8F3;
    min-width: 100%;
    border-radius: 8px;
    overflow: hidden;
    height: 72px;
`;

export const SImageContainer = styled.View`
    flex: 1;
    min-width: 91px;
    height: 100%;
`;

export const Description = styled.View`
    display: flex;
    flex-direction: row;
`;

export const DescriptionMargin = styled.View`
    margin: 16px;
`;

export const SAmountContainer = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    gap: 18px;
`;
