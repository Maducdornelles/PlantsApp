import { FC } from 'react';
import { ImageBackground, ImageBackgroundProps, View } from 'react-native';
import Text from '../Text';
import { ImageIcons, Images, SvgIcons, getImage, getSvg } from '../../utils/icons';

export interface IIconProps {
    icon: ImageIcons | Images
    size?: number
    resizeMode?: ImageBackgroundProps['resizeMode']
}

const IconByImage: FC<IIconProps> = ({ icon, size=16, resizeMode='cover' }) => {
    const selectedIcon = getImage(icon);

    if (!selectedIcon) return (
        <Text>Icon &apos;{icon}&apos; not found.</Text>
    );

    return (
        <ImageBackground resizeMode={resizeMode} source={selectedIcon()}>
            <View style={{
                width: size,
                height: size
            }} />
        </ImageBackground>
    );
};

export interface ISVGIconProps {
    icon: SvgIcons
    fill: string
    size?: number
}

export const Icon: FC<ISVGIconProps> = (props) => {
    const selectedIcon = getSvg(props.icon, props.size);

    if (!selectedIcon) return (
        <Text>Icon &apos;{props.icon}&apos; not found.</Text>
    );

    return (
        <View>
            {selectedIcon?.(props.fill)}
        </View>
    );
};

export default IconByImage;
