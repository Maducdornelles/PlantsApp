import { Children, Dispatch, FC, ReactNode, SetStateAction, cloneElement, useState } from 'react';
import { SLinkContainer, SNav, SSection, SSectionNavContainer } from './styles';
import Text from '../Text';
import { View } from 'react-native';
import Heading from '../Heading';

export interface ISectionNavChild {
    children: ReactNode
}

export interface ISectionNavProps extends ISectionNavChild {
    actualSection: string
    sections: string[]
}

const Root: FC<ISectionNavProps> = ({ actualSection: initialSection, children, sections }) => {
    const [ actualSection, setActualSection ] = useState(initialSection);

    const renderChildren = () => {
        return Children.map(children, (child) => {
            return cloneElement(child as React.DetailedReactHTMLElement<any, HTMLElement>, {
                sectionState: [actualSection, setActualSection, sections]
            });
        });
    };

    return (
        <SSectionNavContainer>
            <SNav>
                { sections.map((section, index) => {
                    const firstChar = section[0];
                    const captalizedSectionName = firstChar.toUpperCase() + section.substring(1);

                    return (
                        <SLinkContainer
                            onPress={() => {
                                setActualSection(section);
                            }} key={index}>
                            <Text style={
                                actualSection !== section ? {
                                    color: '#969595',
                                    fontWeight: '500'
                                } : {
                                    fontWeight: '500'
                                }
                            }
                            >
                                {captalizedSectionName}
                            </Text>
                        </SLinkContainer>
                    );
                }) }
            </SNav>
            {renderChildren()}
        </SSectionNavContainer>
    );
};

export interface ISectionNavSectionProps extends ISectionNavChild {
    sectionId: string
    sectionState?: [string, Dispatch<SetStateAction<string>>, string[]]
}

const Section: FC<ISectionNavSectionProps> = ({ sectionId, sectionState=[], children }) => {
    const [ actualSection, , sections=[] ] = sectionState;

    return sections.includes(sectionId) ?
        actualSection === sectionId ?
            (
                <SSection>
                    {children}
                </SSection>
            ) :
            (
                <View />
            )
        :
        (
            <SSection>
                <Heading
                    level="large"
                    style={{
                        textAlign: 'center'
                    }}
                >
                    Ops Section not found
                </Heading>
            </SSection>
        );
};

export default {
    Root,
    Section
};
