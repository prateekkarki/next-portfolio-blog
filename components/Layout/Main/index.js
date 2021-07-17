import { GlobalStyles } from 'twin.macro';
import { Transition, TransitionGroup } from 'react-transition-group';

import { Toaster } from 'react-hot-toast';
import Header from './Header';
import Footer from './Footer';

import { InnerContainer, MainContainer } from './styles';
import transitionConfig from './styles/transitionConfig';
import ScrollToTop from '../../Common/ScrollToTop';
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
        <ScrollToTop />
        <Toaster position="bottom-center" />
      </MainContainer>
    </div>
  );
}

export default Main;
