import { styled } from 'styled-components/native';

export const SWrapper = styled.View`
    display: flex;
    flex-direction: row;
    min-width: 90%;
    max-width: 90%;
`;

export const SHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
`;

export const SSubTotal = styled.View`
    display: flex;
    flex-direction: row;
    background-color: #ECF8F3;
    margin: 16px 0;
    justify-content: space-between;
    border-width: 1px;
    border-color: #418B64;
    padding: 8px;
    border-radius: 4px;
    width: 100%;
`;
