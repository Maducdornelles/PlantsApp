import { FC, ReactNode } from 'react';
import { SAppView, SPageContainer } from './styles';
import NavBar from '../NavBar';

export interface IPageProps{
    children: ReactNode
}

const Page: FC<IPageProps> = ({children}) => {
    return (
        <>
            <SAppView>
                <SPageContainer>
                    {children}
                </SPageContainer>
            </SAppView>

            <NavBar.Root activeScreen='Cart'>
                <NavBar.Link to='Home' id='Home'>
                    <NavBar.Icon icon='home' />
                    <NavBar.Text>
                            Home
                    </NavBar.Text>
                </NavBar.Link>
                <NavBar.Link to='Favorite' id='Favorite'>
                    <NavBar.Icon icon='favorite' />
                    <NavBar.Text>
                            Favorites
                    </NavBar.Text>
                </NavBar.Link>
                <NavBar.Link to='Cart' id='Cart'>
                    <NavBar.Icon icon='cart' />
                    <NavBar.Text>
                            Cart
                    </NavBar.Text>
                </NavBar.Link>
            </NavBar.Root>
        </>
    );
};

export default Page;
