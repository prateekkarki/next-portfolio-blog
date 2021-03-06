import { GlobalStyles } from 'twin.macro';
import { Slide } from 'react-toastify';
import { Transition, TransitionGroup } from 'react-transition-group';

import Header from './Header';
import Footer from './Footer';

import { StyledToastContainer, InnerContainer, MainContainer } from './styles';
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

        <StyledToastContainer
          className="impct-toast"
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable={false}
          pauseOnHover
          transition={Slide}
        />
      </MainContainer>
    </div>
  );
}

export default Main;
