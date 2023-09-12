import { Dispatch, FC, SetStateAction, useState } from 'react';
import IconByImage, { Icon } from '../Icon';
import { SCircleButton } from './styles';
import { ImageIcons, SvgIcons } from '../../utils/icons';
import { ImageBackgroundProps, StyleProp, ViewStyle } from 'react-native';

export interface ICircleButtonProps {
    icon: ImageIcons | SvgIcons
    shadow?: boolean
    iconSize?: number
    useSvg?: boolean
    fill?: string
    style?: StyleProp<ViewStyle>
    size?: number
    resizeMode?: ImageBackgroundProps['resizeMode']
    onPress: (setIcon: Dispatch<SetStateAction<ImageIcons | SvgIcons>>) => void
}

const CircleButton: FC<ICircleButtonProps> = ({shadow=true, useSvg=false, fill='#000', ...props}) => {
    const [ icon, setIcon ] = useState(props.icon);

    if (props.icon !== icon && useSvg) {
        setIcon(props.icon);
    }

    return (
        <SCircleButton
            size={props.size}
            style={shadow ? Object.assign({}, {
                shadowColor: '#000',
                shadowOpacity: 0.25,
                shadowRadius: 5,
                elevation: 7,
            }, props.style) : props.style}
            onPress={() => props.onPress(setIcon)}
        >
            {!useSvg ? (
                <IconByImage icon={icon as ImageIcons} resizeMode={props.resizeMode} size={props.iconSize} />
            ):
                (
                    <Icon size={props.iconSize} icon={icon as SvgIcons} fill={fill} />
                )
            }
        </SCircleButton>
    );
};

export default CircleButton;
