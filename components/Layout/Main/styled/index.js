import tw, { css, styled, theme } from 'twin.macro';
import { ToastContainer } from 'react-toastify';

export const MainContainer = styled.div([
  tw`bg-main-800 text-main-100 dark:bg-main-100 dark:text-main-800 max-w-full overflow-x-auto overflow-y-hidden`,
  css`padding-top:${theme`spacing.header`};`,
]);

export const StyledToastContainer = styled(ToastContainer)`
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

export const InnerContainer = styled.div(
  css`min-height:calc(100vh - ${theme`spacing.header`} -  ${theme`spacing.footer`});`
);
