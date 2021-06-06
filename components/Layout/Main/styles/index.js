import tw, { css, styled, theme } from 'twin.macro';

export const MainContainer = styled.div([
  tw`bg-light-100 text-light-800 dark:bg-dark-100 dark:text-dark-800 max-w-full overflow-x-auto overflow-y-hidden`,
  css`padding-top:${theme`spacing.header`};`,
]);
export const InnerContainer = styled.div(
  css`min-height:calc(100vh - ${theme`spacing.header`} -  ${theme`spacing.footer`});`
);
