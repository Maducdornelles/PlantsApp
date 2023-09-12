import { styled } from 'styled-components/native';

export const SCircleButton = styled.TouchableOpacity<{size?: number}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({size=16}) => `${size}px`};
    height: ${({size=16}) => `${size}px`};
    background-color: #fff;
    overflow: hidden;
    border-radius: ${({size=16}) => `${size}px`};
`;
