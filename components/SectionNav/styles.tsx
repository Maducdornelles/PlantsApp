import { styled } from 'styled-components/native';

export const SSectionNavContainer = styled.View`
    display: flex;
    justify-content: center;
    height: 100%;
`;

export const SNav = styled.View`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 40px;
    height: 60px;
`;

export const SLinkContainer = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    height: 100%;
`;

export const SSection = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
`;
