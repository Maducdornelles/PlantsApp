import { ImageBackground, SafeAreaView, ScrollView, View } from 'react-native';
import Card from '../../components/Card';
import Page from '../../components/Page';
import { SHeader, SWrapper } from './styles';
import Heading from '../../components/Heading';
import Link from '../../components/Link';
import IconByImage from '../../components/Icon';
import { getImage } from '../../utils/icons';
import SectionNav from '../../components/SectionNav';
import { SAppView, SPageContainer } from '../../components/Page/styles';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation<any>();

    return (
        <SAppView>
            <SPageContainer>
                <ImageBackground
                    style={{
                        flex: 2,
                        minWidth: '100%',
                    }}
                    source={getImage('background')?.()}
                />
                <SWrapper
                    style={{
                        flexDirection: 'column'
                    }}
                >
                    <Heading
                        level='large'
                    >
                        Plant
                    </Heading>
                    <Heading
                        style={{
                            transform: [
                                {
                                    translateY: -30
                                }
                            ]
                        }}
                        level='large'
                    >
                        Paradise
                    </Heading>
                    <Text
                        style={{
                            transform: [
                                {
                                    translateY: -45
                                }
                            ]
                        }}>
                        Find your favorite plants and{'\n'}help the environment
                    </Text>
                </SWrapper>
                <SWrapper
                    style={{
                        flexDirection: 'column',
                        gap: 16,
                        transform: [
                            {
                                translateY: -20
                            }
                        ]
                    }}
                >
                    <Button.Root
                        onPress={() => {
                            navigation.navigate('SignIn');
                        }}
                        style={{
                            display: 'flex',
                            height: 64,
                            justifyContent: 'center'
                        }}
                    >
                        <Button.Text
                            style={{
                                fontSize: 24
                            }}
                        >
                            Sign In
                        </Button.Text>
                    </Button.Root>
                    <Button.Root
                        onPress={() => {
                            navigation.navigate('SignUp');
                        }}
                        style={{
                            display: 'flex',
                            height: 64,
                            justifyContent: 'center'
                        }}
                    >
                        <Button.Text
                            style={{
                                fontSize: 24
                            }}
                        >
                            Sign Up
                        </Button.Text>
                    </Button.Root>
                </SWrapper>
            </SPageContainer>
        </SAppView>
    );
};
