import { useFonts } from 'expo-font';
import { FC, ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';
import { LoadFontsContainer } from './styles';

export interface ILoadFontsProps {
    children: ReactNode
}

const LoadFonts: FC<ILoadFontsProps> = ({ children }) => {
    const [ isLoaded ] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'SourceSans-Regular': require('../../assets/fonts/SourceSans-Regular.ttf')
    });

    if (!isLoaded) {
        return (
            <LoadFontsContainer>
                <ActivityIndicator size="large" />
            </LoadFontsContainer>
        );
    }

    return (
        <>
            {children}
        </>
    );
};

export default LoadFonts;
