import { styled } from 'styled-components/native';
import { IDescriptionCardProps, IImageCardProps, IRootCardProps } from '.';

export const SCard = styled.View<IRootCardProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: ${({direction='horizontal'}) => direction === 'horizontal' ? 'row' : 'column'};
    width: ${({width}) => typeof width === 'string' ? width : `${width}px`};
    height: ${({height}) => typeof height === 'string' ? height : `${height}px`};
    border-radius: 8px;
    background-color: #fff;
    overflow: hidden;
`;

export const SImageCardContainer = styled.View<Omit<IImageCardProps, 'source'>>`
        ${p => p.direction == 'horizontal' ?
        `
        height: 100%;
        ` :`
        min-width: 100%;
        min-height: 70%;
`}
    padding: 4px;
`;

export const SImageDescriptionContainer = styled.View<IDescriptionCardProps>`
    display: flex;
    justify-content: space-between;
    ${p => p.direction == 'horizontal' ?
        `
        width: 50%;
        height: 100%;
        padding: 8px;
    ` :
        `
        width: 100%;
        flex-direction: row;
        align-items: center;
        height: 30%;
        padding: 16px;
    `
}
    background-color: #fff;
`;
