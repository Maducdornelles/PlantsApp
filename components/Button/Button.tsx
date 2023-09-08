import { CSSProperties, FC, ReactNode } from "react";
import { ButtonContainer, ButtonText } from "./styles";
import { Text } from "react-native";

interface IButtonProps {
    children: ReactNode;
    styles?: CSSProperties
    textStyles?: CSSProperties
    onPress: () => void; 
}

export const Button: FC<IButtonProps> = ({ children, styles={}, textStyles={} }) => {
    return (
        <ButtonContainer style={{...styles as any}}>
            <ButtonText style={{...textStyles as any}}>
                {children}
            </ButtonText>
        </ButtonContainer>
    )
}
