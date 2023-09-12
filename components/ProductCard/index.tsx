import { Children, Dispatch, FC, ReactNode, SetStateAction, cloneElement, useState } from 'react';
import { SImageContainer, SProductContainer, Description, DescriptionMargin, SAmountContainer } from './styles';
import { Images, SvgIcons, getImage } from '../../utils/icons';
import { ImageBackground, View } from 'react-native';
import Text from '../Text';
import FavoriteButton from '../FavoriteButton';
import CircleButton from '../CircleButton';
import { Icon } from '../Icon';

export interface IProductCardProps {
    children: ReactNode
}

const Root: FC<IProductCardProps> = ({children}) => {
    const [ isDisplayed, setIsDisplayed ] = useState(true);

    const renderChildren = () => {
        return Children.map(children, (child) => {
            return cloneElement(child as React.DetailedReactHTMLElement<any, HTMLElement>, {
                displayState: [ isDisplayed, setIsDisplayed ]
            });
        });
    };

    return (
        <>
            {isDisplayed ? (
                <SProductContainer>
                    {renderChildren()}
                </SProductContainer>
            ): <></>}
        </>
    );
};

export interface IProductCardImageProps {
    image: Images
}

const Image: FC<IProductCardImageProps> = ({image}) => {
    const sourceImage = getImage(image);

    if (!sourceImage) return (
        <Text>
            Cannot load image
        </Text>
    );

    return (
        <ImageBackground style={{
            borderRadius: 8,
            overflow: 'hidden',
            minWidth: 97,
            minHeight: '100%'
        }} source={sourceImage()}>
            <SImageContainer  />
        </ImageBackground>
    );
};

export interface IProductCardTitleProps {
    children: ReactNode
}

const Title: FC<IProductCardTitleProps> = ({children}) => {
    return (
        <Text style={{
            fontWeight: 'bold'
        }}>
            {children}
        </Text>
    );
};

export interface IProductCardPriceProps {
    value: number
}

const Price: FC<IProductCardPriceProps> = ({value}) => {
    return (
        <Text style={{
            fontWeight: 'bold'
        }}>
            $ {value.toFixed(2)}
        </Text>
    );
};

export interface IProductCartAmountProps {
    amount: number,
    displayState?: [boolean, Dispatch<SetStateAction<boolean>>]
}

const Amount: FC<IProductCartAmountProps> = ({amount: amountProps, displayState: [isDisplayed, setIsDisplayed]=[]}) => {
    const [amount, setAmount] = useState(amountProps);

    const isTrash = amount <= 1;
    const color = isTrash ? '#FC7272' : '#418B64';

    return (
        <SAmountContainer>
            <CircleButton
                useSvg={true}
                icon={isTrash ? 'trash' : 'minus'}
                fill={color}
                shadow={false}
                size={30}
                iconSize={12}
                style={{
                    borderWidth: 2,
                    borderColor: color,
                }}
                onPress={isTrash ? () => {
                    setIsDisplayed?.(false);
                } : () => {
                    setAmount(prev => prev - 1);
                }}
            />
            <Text style={{
                fontWeight: 'bold'
            }}>
                {amount}
            </Text>
            <CircleButton
                useSvg={true}
                icon='plus'
                fill='#fff'
                shadow={false}
                size={30}
                iconSize={12}
                style={{
                    borderWidth: 2,
                    marginRight: 16,
                    backgroundColor: '#418B64',
                    borderColor: '#418B64',
                }}
                onPress={() => {
                    setAmount(prev => prev + 1);
                }}
            />
        </SAmountContainer>
    );
};

export interface IProductCartFavoriteProps {
    activated: boolean
}

const Favorite: FC<IProductCartFavoriteProps> = ({
    activated
}) => {
    return (
        <FavoriteButton
            style={{
                marginRight: 16
            }}
            iconSize={16}
            activated={activated}
            size={40}
        />
    );
};

export default {
    Root,
    Image,
    Title,
    Price,
    Amount,
    Favorite,
    DescriptionContainer: Description,
    DescriptionMargin
};
