import { FC, ReactNode } from 'react';
import { SText } from './styles';
import { StyleProp, TextStyle } from 'react-native';

export interface ITextProps {
    children: ReactNode
    style?: StyleProp<TextStyle>
    onPress?: () => void
}

const Text: FC<ITextProps> = ({ children, style={}, onPress }) => {
    return (
        <SText onPress={onPress}  style={style}>
            {children}
        </SText>
    );
};

export default Text;
