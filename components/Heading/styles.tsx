import { styled } from 'styled-components/native';
import { IHeadingProps } from '.';

export const SHeading = styled.Text<IHeadingProps>`
    font-family: 'Poppins-Bold';
    font-size: ${({level = 'medium'}) => {
        const acceptedLevels: Record<string, () => string> = {
            small() {
                return '14px';
            },
            medium() {
                return '24px';
            },
            large() {
                return '50px';
            }
        };

        const size = acceptedLevels[level];
        if (!size) return acceptedLevels['medium']();

        return size();
    }};
    font-weight: 600;
    letter-spacing: 0px;
    text-align: left;

`;
