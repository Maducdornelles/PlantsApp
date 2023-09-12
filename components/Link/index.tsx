import { FC, ReactNode } from 'react';
import { SLinkContainer } from './styles';
import { useNavigation } from '@react-navigation/native';
import TextComponent from '../Text';
import { StyleProp, ViewStyle } from 'react-native';

export interface ILinkProps {
    children: ReactNode
    style?: StyleProp<ViewStyle>
}

export interface IRootLinkProps extends ILinkProps {
    to: string
    onPress?: () => void
}

const Root: FC<IRootLinkProps> = ({ to, children, style={}, onPress }) => {
    const navigation = useNavigation<any>();

    return (
        <SLinkContainer
            style={style}
            onPress={() => {
                onPress?.();
                navigation.navigate(to);
            }}>
            {children}
        </SLinkContainer>
    );
};

const Text: FC<ILinkProps> = ({ children }) => {
    return (
        <TextComponent>
            {children}
        </TextComponent>
    );
};

export default {
    Root,
    Text
};
