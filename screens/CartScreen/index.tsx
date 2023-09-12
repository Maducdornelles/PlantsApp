import { SafeAreaView, ScrollView, View } from 'react-native';
import Heading from '../../components/Heading';
import Page from '../../components/Page';
import ProductCard from '../../components/ProductCard';
import { SHeader, SSubTotal, SWrapper } from './style';
import Text from '../../components/Text';
import Button from '../../components/Button';

export default () => (
    <Page>
        <SWrapper
            style={{
                marginTop: 80,
                marginBottom: 24
            }}
        >
            <SHeader>
                <Heading level="medium">
                    Cart
                </Heading>
            </SHeader>
        </SWrapper>
        <SWrapper
            style={{
                flex: 2,
            }}
        >
            <SafeAreaView>
                <ScrollView>
                    <View
                        style={{
                            gap: 24,
                            marginBottom: 24
                        }}
                    >
                        <ProductCard.Root>
                            <ProductCard.DescriptionContainer>
                                <ProductCard.Image image='productImage' />
                                <ProductCard.DescriptionMargin>
                                    <ProductCard.Title>
                                        Green Vines
                                    </ProductCard.Title>
                                    <ProductCard.Price value={9.20} />
                                </ProductCard.DescriptionMargin>
                            </ProductCard.DescriptionContainer>
                            <ProductCard.Amount amount={2} />
                        </ProductCard.Root>
                        <ProductCard.Root>
                            <ProductCard.DescriptionContainer>
                                <ProductCard.Image image='productImage' />
                                <ProductCard.DescriptionMargin>
                                    <ProductCard.Title>
                                        Green Vines
                                    </ProductCard.Title>
                                    <ProductCard.Price value={9.20} />
                                </ProductCard.DescriptionMargin>
                            </ProductCard.DescriptionContainer>
                            <ProductCard.Amount amount={2} />
                        </ProductCard.Root>
                        <ProductCard.Root>
                            <ProductCard.DescriptionContainer>
                                <ProductCard.Image image='productImage' />
                                <ProductCard.DescriptionMargin>
                                    <ProductCard.Title>
                                        Green Vines
                                    </ProductCard.Title>
                                    <ProductCard.Price value={9.20} />
                                </ProductCard.DescriptionMargin>
                            </ProductCard.DescriptionContainer>
                            <ProductCard.Amount amount={2} />
                        </ProductCard.Root>
                        <ProductCard.Root>
                            <ProductCard.DescriptionContainer>
                                <ProductCard.Image image='productImage' />
                                <ProductCard.DescriptionMargin>
                                    <ProductCard.Title>
                                        Green Vines
                                    </ProductCard.Title>
                                    <ProductCard.Price value={9.20} />
                                </ProductCard.DescriptionMargin>
                            </ProductCard.DescriptionContainer>
                            <ProductCard.Amount amount={2} />
                        </ProductCard.Root>
                        <ProductCard.Root>
                            <ProductCard.DescriptionContainer>
                                <ProductCard.Image image='productImage' />
                                <ProductCard.DescriptionMargin>
                                    <ProductCard.Title>
                                        Green Vines
                                    </ProductCard.Title>
                                    <ProductCard.Price value={9.20} />
                                </ProductCard.DescriptionMargin>
                            </ProductCard.DescriptionContainer>
                            <ProductCard.Amount amount={2} />
                        </ProductCard.Root>
                        <ProductCard.Root>
                            <ProductCard.DescriptionContainer>
                                <ProductCard.Image image='productImage' />
                                <ProductCard.DescriptionMargin>
                                    <ProductCard.Title>
                                        Green Vines
                                    </ProductCard.Title>
                                    <ProductCard.Price value={9.20} />
                                </ProductCard.DescriptionMargin>
                            </ProductCard.DescriptionContainer>
                            <ProductCard.Amount amount={2} />
                        </ProductCard.Root>
                        <ProductCard.Root>
                            <ProductCard.DescriptionContainer>
                                <ProductCard.Image image='productImage' />
                                <ProductCard.DescriptionMargin>
                                    <ProductCard.Title>
                                        Green Vines
                                    </ProductCard.Title>
                                    <ProductCard.Price value={9.20} />
                                </ProductCard.DescriptionMargin>
                            </ProductCard.DescriptionContainer>
                            <ProductCard.Amount amount={2} />
                        </ProductCard.Root>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SWrapper>
        <SWrapper>
            <SSubTotal>
                <Text>
                    Subtotal:
                </Text>
                <Text
                    style={{
                        fontWeight: 'bold'
                    }}
                >
                    $30.80
                </Text>
            </SSubTotal>
        </SWrapper>
        <SWrapper>
            <Button.Root
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: 64
                }}
            >
                <Button.Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 16
                    }}
                >
                    Go to Checkout
                </Button.Text>
            </Button.Root>
        </SWrapper>
    </Page>
);
