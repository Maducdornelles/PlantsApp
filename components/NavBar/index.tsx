import { Children, Dispatch, FC, ReactNode, SetStateAction, cloneElement, useState } from 'react';
import { SLinkContainer, SNavContainer } from './styles';
import LinkComponent from '../Link';
import { SvgIcons } from '../../utils/icons';
import { Icon as IconComponent } from '../Icon';
import TextComponent from '../Text';
import { useRoute } from '@react-navigation/native';

export interface INavBarProps {
    activeScreen: string
    children: ReactNode
}

const Root: FC<INavBarProps> = ({ children }) => {
    const route = useRoute();
    const [ activateScreen, setActivateScreen ] = useState(route.name);

    if (activateScreen !== route.name) setActivateScreen(route.name);

    const renderChildren = () => {
        return Children.map(children, (child) => {
            return cloneElement(child as React.DetailedReactHTMLElement<any, HTMLElement>, {
                activateState: [ activateScreen, setActivateScreen ]
            });
        });
    };

    return (
        <SNavContainer style={{
            shadowColor: '#000',
            shadowOffset:{
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24,
        }}>
            {renderChildren()}
        </SNavContainer>
    );
};

export interface ILinkNavBarProps {
    to: string
    children: ReactNode
    id: string
    activateState?: [ string, Dispatch<SetStateAction<string>> ]
}

const Link: FC<ILinkNavBarProps> = ({to, children, id, activateState: [activateScreen, setActivateScreen] = []}) => {
    const renderChildren = () => {
        return Children.map(children, (child) => {
            return cloneElement(child as React.DetailedReactHTMLElement<any, HTMLElement>, {
                activateScreen,
                id
            });
        });
    };

    return (
        <LinkComponent.Root
            style={{
                flex: 2
            }}
            to={to}
            onPress={() => {
                setActivateScreen?.(id);
            }}
        >
            <SLinkContainer>
                {renderChildren()}
            </SLinkContainer>
        </LinkComponent.Root>
    );
};

export interface IIconNavBarProps {
    icon: SvgIcons,
    activateScreen?: string
    id?: string
}

const Icon: FC<IIconNavBarProps> = ({icon, activateScreen='', id=''}) => {

    return (
        <IconComponent fill={activateScreen === id ? '#418B64' : '#000'} icon={icon}/>
    );
};

export interface ITextNavBarProps {
    isActivate?: boolean
    children: ReactNode
    activateScreen?: string
    id?: string
}

const Text: FC<ITextNavBarProps> = ({ activateScreen='', id='', children }) => {

    return (
        <TextComponent
            style={{
                marginTop: 4,
                color: activateScreen === id ? '#418B64' : '#000'
            }}
        >
            {children}
        </TextComponent>
    );
};

export default {
    Root,
    Link,
    Icon,
    Text
};
