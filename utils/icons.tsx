import { ReactNode } from 'react';
import { Path, Svg } from 'react-native-svg';

export type ImageIcons =
    | 'user'
    | 'favorite'
    | 'favorite-green'
    | 'cart-icon'

export type Images =
    | 'background'
    | 'productImage'

export type SvgIcons =
    | 'home'
    | 'cart'
    | 'favorite-green'
    | 'favorite'
    | 'trash'
    | 'plus'
    | 'minus'

export function getImage(image: ImageIcons | Images): null | (() => any) {
    const acceptedImages: Record<string, () => any> = {
        user: () => require('../assets/user-icon.png'),
        favorite: () => require('../assets/favorite-icon.png'),
        'favorite-green': () => require('../assets/favorite-green-icon.png'),
        background: () => require('../assets/background.jpg'),
        productImage: () => require('../assets/product-image.jpeg'),
        'cart-icon': () => require('../assets/cart-icon.png')
    };

    if (!acceptedImages[image]) return null;
    return acceptedImages[image];
}

export function getSvg(icon: SvgIcons, size=0): ((fill: string) => ReactNode) | null {
    const acceptedIcons: Record<string, (fill: string) => ReactNode> = {
        home: (fill: string) =>
            <Svg width="26" height="22" viewBox="0 0 26 22" fill="none">
                <Path fill={fill} d="M13 3.7375L19.25 9.3625V19.125H16.75V11.625H9.25V19.125H6.75V9.3625L13 3.7375ZM13 0.375L0.5 11.625H4.25V21.625H11.75V14.125H14.25V21.625H21.75V11.625H25.5L13 0.375Z" />
            </Svg>,
        cart: (fill: string) =>
            <Svg width="20" height="26" viewBox="0 0 20 26" fill="none">
                <Path fill={fill} d="M17.5 5.5H15C15 2.7375 12.7625 0.5 10 0.5C7.2375 0.5 5 2.7375 5 5.5H2.5C1.125 5.5 0 6.625 0 8V23C0 24.375 1.125 25.5 2.5 25.5H17.5C18.875 25.5 20 24.375 20 23V8C20 6.625 18.875 5.5 17.5 5.5ZM10 3C11.375 3 12.5 4.125 12.5 5.5H7.5C7.5 4.125 8.625 3 10 3ZM17.5 23H2.5V8H5V10.5C5 11.1875 5.5625 11.75 6.25 11.75C6.9375 11.75 7.5 11.1875 7.5 10.5V8H12.5V10.5C12.5 11.1875 13.0625 11.75 13.75 11.75C14.4375 11.75 15 11.1875 15 10.5V8H17.5V23Z" />
            </Svg>,
        'favorite-green': (fill: string) =>
            <Svg width="18" height="16" viewBox="0 0 18 16" fill="none">
                <Path fill={fill} d="M8.99999 15.6459L7.79166 14.5459C3.49999 10.6542 0.666656 8.08752 0.666656 4.93752C0.666656 2.37085 2.68332 0.354187 5.24999 0.354187C6.69999 0.354187 8.09166 1.02919 8.99999 2.09585C9.90832 1.02919 11.3 0.354187 12.75 0.354187C15.3167 0.354187 17.3333 2.37085 17.3333 4.93752C17.3333 8.08752 14.5 10.6542 10.2083 14.5542L8.99999 15.6459Z" />
            </Svg>,
        'favorite': (fill: string) =>
            <Svg width="26" height="24" viewBox="0 0 26 24" fill="none">
                <Path fill={fill} d="M18.625 0.53125C16.45 0.53125 14.3625 1.54375 13 3.14375C11.6375 1.54375 9.55 0.53125 7.375 0.53125C3.525 0.53125 0.5 3.55625 0.5 7.40625C0.5 12.1313 4.75 15.9813 11.1875 21.8313L13 23.4688L14.8125 21.8188C21.25 15.9813 25.5 12.1313 25.5 7.40625C25.5 3.55625 22.475 0.53125 18.625 0.53125ZM13.125 19.9688L13 20.0938L12.875 19.9688C6.925 14.5812 3 11.0188 3 7.40625C3 4.90625 4.875 3.03125 7.375 3.03125C9.3 3.03125 11.175 4.26875 11.8375 5.98125H14.175C14.825 4.26875 16.7 3.03125 18.625 3.03125C21.125 3.03125 23 4.90625 23 7.40625C23 11.0188 19.075 14.5812 13.125 19.9688Z" />
            </Svg>,
        'trash': (fill: string) =>
            <Svg width={size} height={size} viewBox="0 0 8 10" fill="none" >
                <Path fill={fill} d="M1 8.5C1 9.05 1.45 9.5 2 9.5H6C6.55 9.5 7 9.05 7 8.5V2.5H1V8.5ZM2 3.5H6V8.5H2V3.5ZM5.75 1L5.25 0.5H2.75L2.25 1H0.5V2H7.5V1H5.75Z" />
            </Svg>,
        'plus': (fill: string) =>
            <Svg width={size} height={size} viewBox="0 0 8 7" fill="none" >
                <Path fill={fill} d="M7.5 3.97909H4.5V6.85409H3.5V3.97909H0.5V3.02075H3.5V0.145752H4.5V3.02075H7.5V3.97909Z" />
            </Svg>,
        minus: (fill: string) =>
            <Svg width={size} height={size} viewBox="0 0 8 1" fill="none">
                <Path  d="M7.5 0.979207H0.5V0.020874H7.5V0.979207Z" fill={fill}/>
            </Svg>
    };

    const execution = acceptedIcons[icon];

    if (!execution) return null;
    return execution;
}
