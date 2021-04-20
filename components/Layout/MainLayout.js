import tw, { css, styled, GlobalStyles, theme } from 'twin.macro';
import anime from 'animejs';
import { ToastContainer, Slide } from 'react-toastify';

import { Transition, TransitionGroup } from 'react-transition-group';

import Header from './Header';
import Footer from './Footer';

import { useLocalStorage } from '../../hooks';
import { FullpageLoader, MetaHead } from '..';

const Container = styled.div([
  tw`bg-main-800 text-main-100 dark:bg-main-100 dark:text-main-800 max-w-full overflow-x-auto overflow-y-hidden`,
  css`padding-top:${theme`spacing.header`};`,
]);

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    ${tw`rounded`}
  }
  .Toastify__toast--error{
    ${tw`bg-secondary`}
  }
  .Toastify__toast--success{
    ${tw`bg-success`}
  }
  .Toastify__progress-bar{
    ${tw`bg-main-100`}
  }
`;

const InnerContainer = styled.div(
  css`min-height:calc(100vh - ${theme`spacing.header`} -  ${theme`spacing.footer`});`
);

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

function MainLayout({ children, pathname }) {
  const [isDark, setIsDark] = useLocalStorage('isDark', false);
  return (
    <div className={isDark ? 'dark' : ''}>
      <Container>
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
      </Container>
    </div>
  );
}

export default MainLayout;
