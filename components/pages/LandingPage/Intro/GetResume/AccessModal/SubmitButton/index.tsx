import React, { ReactElement } from 'react';
import { SubmitArrow } from 'components/pages/LandingPage/Intro/GetResume/AccessModal/styles';

interface SubmitButtonProps {
  submitting?: boolean;
  children: React.ReactNode;
  [key: string]: any;
}

export const SubmitButton = ({
  submitting,
  children,
  ...props
}: SubmitButtonProps): ReactElement => (
  <SubmitArrow disabled={submitting} isSubmitting={submitting} {...props}>
    {submitting ? (
      <img
        tw="max-width[24px]"
        alt="loading"
        title="Loading"
        src="/images/loading/puff.svg"
      />
    ) : (
      children
    )}
  </SubmitArrow>
);

export default SubmitButton;
