import { GlobalStyles } from 'twin.macro';
import { Transition, TransitionGroup } from 'react-transition-group';

import Header from './Header';
import Footer from './Footer';

import { InnerContainer, MainContainer } from './styles';
import transitionConfig from './styles/transitionConfig';

import { FullpageLoader, MetaHead } from '../..';

function Main({ children, pathname }) {
  return (
    <div>
      <MainContainer>
        <GlobalStyles />
        <MetaHead />
        <Header />
        <TransitionGroup>
          <Transition key={pathname} {...transitionConfig}>
            <InnerContainer>
              <FullpageLoader />
              {children}
            </InnerContainer>
          </Transition>
        </TransitionGroup>
        <Footer />
      </MainContainer>
    </div>
  );
}

export default Main;
