import { SafeAreaView, ScrollView, View } from 'react-native';
import Heading from '../../components/Heading';
import Page from '../../components/Page';
import { SHeader, SWrapper } from './styles';
import ProductCard from '../../components/ProductCard';

export default () => {
    return (
        <Page>
            <SWrapper
                style={{
                    marginTop: 80,
                    marginBottom: 24
                }}
            >
                <SHeader>
                    <Heading level="medium">
                        Favorites
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
                                <ProductCard.Favorite activated={true} />
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
                                <ProductCard.Favorite activated={true} />
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
                                <ProductCard.Favorite activated={true} />
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
                                <ProductCard.Favorite activated={true} />
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
                                <ProductCard.Favorite activated={true} />
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
                                <ProductCard.Favorite activated={true} />
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
                                <ProductCard.Favorite activated={true} />
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
                                <ProductCard.Favorite activated={true} />
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
                                <ProductCard.Favorite activated={true} />
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
                                <ProductCard.Favorite activated={true} />
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
                                <ProductCard.Favorite activated={true} />
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
                                <ProductCard.Favorite activated={true} />
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
                                <ProductCard.Favorite activated={true} />
                            </ProductCard.Root>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </SWrapper>
        </Page>
    );
};
