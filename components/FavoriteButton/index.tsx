import { FC, useState } from 'react';
import CircleButton from '../CircleButton';
import { StyleProp, ViewStyle } from 'react-native';

export interface IFavoriteButton {
    activated?: boolean,
    size?: number
    style?: StyleProp<ViewStyle>
    iconSize?: number
}

const FavoriteButton: FC<IFavoriteButton> = ({ activated=false, size=30, style={}, iconSize=13 }) => {
    let activateStatus = activated;

    return (
        <CircleButton
            size={size}
            style={style}
            iconSize={iconSize}
            icon={activateStatus ? 'favorite-green' : 'favorite'}
            onPress={(setIcon) => {
                if (activateStatus) {
                    setIcon('favorite');
                } else {
                    setIcon('favorite-green');
                }

                activateStatus = !activateStatus;
            }} />
    );
};

export default FavoriteButton;
