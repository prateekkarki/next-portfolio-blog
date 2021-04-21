import { GlobalStyles } from 'twin.macro';
import anime from 'animejs';
import { Slide } from 'react-toastify';

import { Transition, TransitionGroup } from 'react-transition-group';

import Header from './Header';
import Footer from './Footer';

import { StyledToastContainer, InnerContainer, MainContainer } from './styled';

import { useLocalStorage } from '../../../hooks';
import { FullpageLoader, MetaHead } from '../..';

const transitionConfig = {
  timeout: 650,
  unmountOnExit: true,
  onEnter: (node) => {
    const el = node;
    el.style.display = 'none';
  },
  onEntered: (node) => {
    const el = node;
    el.style.display = 'block';
    anime({
      targets: node.querySelectorAll('.fullpage-loader>div'),
      translateX: ['0%', '100%'],
      duration: 500,
      easing: 'easeInOutSine',
      delay: anime.stagger(150),
    });
  },
  onExit: (node) => {
    anime({
      targets: node.querySelectorAll('.fullpage-loader>div'),
      scaleX: [0, 1],
      translateX: ['0%', '0%'],
      duration: 500,
      easing: 'easeInOutSine',
      delay: anime.stagger(150),
    });
  },
};

function Main({ children, pathname }) {
  const [isDark, setIsDark] = useLocalStorage('isDark', true);
  return (
    <div className={isDark ? 'dark' : ''}>
      <MainContainer>
        <GlobalStyles />
        <MetaHead />
        <Header
          isDark={isDark}
          onThemeToggle={() => {
            setIsDark(!isDark);
          }}
        />
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
