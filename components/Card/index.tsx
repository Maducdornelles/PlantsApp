import { Children, FC, ReactNode, cloneElement } from 'react';
import { SCard, SImageCardContainer, SImageDescriptionContainer } from './styles';
import Text from '../Text';
import FavoriteButton from '../FavoriteButton';
import { ActivityIndicator, ImageBackground, StyleProp, View, ViewStyle } from 'react-native';
import { getImage } from '../../utils/icons';
import Heading from '../Heading';
import Button from '../Button';
import CircleButton from '../CircleButton';

export interface ICardProps {
    children: ReactNode
}

export interface IRootCardProps extends ICardProps {
    width: number | string
    height: number | string
    direction?: 'horizontal' | 'vertical'
    style?: StyleProp<ViewStyle>
}

const Root: FC<IRootCardProps> = (props) => {
    const renderChildren = () => {
        return Children.map(props.children, (child) => {
            return cloneElement(child as React.DetailedReactHTMLElement<any, HTMLElement>, {
                direction: props.direction
            });
        });
    };

    return (
        <SCard
            direction={props.direction}
            style={{
                shadowColor: '#000',
                shadowOpacity: 0.25,
                shadowRadius: 5,
                elevation: 5,
                ...props.style as any
            }}
            width={props.width}
            height={props.height}
        >
            {renderChildren()}
        </SCard>
    );
};

export interface IImageCardProps {
    source: { uri: string } | any
    direction?: IRootCardProps['direction']
}

const Image: FC<IImageCardProps> = (props) => {
    // temporary
    const image = getImage('productImage');

    if (!image) {
        return (
            <ActivityIndicator size="large" />
        );
    }

    return (
        <ImageBackground style={{flex: 2}} source={image()}>
            <SImageCardContainer direction={props.direction}>
                <FavoriteButton />
            </SImageCardContainer>
        </ImageBackground>
    );
};
// this is 69 line
export interface IDescriptionCardProps extends ICardProps {
    direction?: IRootCardProps['direction']
}

const Description: FC<IDescriptionCardProps> = (props) => {
    return (
        <SImageDescriptionContainer direction={props.direction ?? 'horizontal'}>
            <View>
                {props.children}
            </View>
            {props.direction === 'horizontal' ?
                (<Button.Root style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: 0
                }}>
                    <Button.Text style={{
                        fontSize: 12
                    }}>Add to cart</Button.Text>
                </Button.Root>)

                :

                (
                    <CircleButton
                        style={{
                            backgroundColor: '#418B64'
                        }}
                        resizeMode='center'
                        icon='cart-icon'
                        iconSize={13}
                        size={30}
                        onPress={() => {}}
                    />
                )
            }
        </SImageDescriptionContainer>
    );
};

export interface ICardPriceProps {
    value: number
}

const Price: FC<ICardPriceProps> = ({value}) => {
    return (
        <Text style={{
            fontWeight: 'bold',
            fontSize: 14
        }}>
            $ {value.toFixed(2)}
        </Text>
    );
};

const Title: FC<ICardProps> = (props) => {
    return (
        <Heading
            style={{
                fontWeight: '500',
                fontFamily: 'Poppins-Regular'
            }} level='small'
        >
            {props.children}
        </Heading>
    );
};

export default {
    Root,
    Image,
    Description,
    Title,
    Price
};
