import { FC, ReactNode } from 'react';
import { SHeading } from './styles';
import { StyleProp, TextStyle } from 'react-native';

export interface IHeadingProps {
    level?: 'large' | 'medium' | 'small'
    style?: StyleProp<TextStyle>
    children: ReactNode
}

const Heading: FC<IHeadingProps> = ({ level='medium', children, style={} }) => {
    return (
        <SHeading style={style} level={level}>
            {children}
        </SHeading>
    );
};

export default Heading;
