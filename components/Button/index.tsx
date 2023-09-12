import { FC, ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { SButton, SText } from './style';

export interface IButtonProps {
    children: ReactNode
    style?: StyleProp<ViewStyle>
    onPress?: () => void
}

const Root: FC<IButtonProps> = ({ children, style={}, onPress }) => {
    return (
        <SButton
            style={style}
            onPress={onPress}
        >
            {children}
        </SButton>
    );
};

export interface IButtonTextProps extends IButtonProps {
    style?: StyleProp<TextStyle>
}

const Text: FC<IButtonTextProps> = ({ children, style={} }) => {
    return (
        <SText style={style}>
            {children}
        </SText>
    );
};

export default {
    Root,
    Text
};
