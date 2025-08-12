import React from 'react';
import { SubmitArrow } from '../styles';

interface SubmitButtonProps {
  submitting?: boolean;
  children: React.ReactNode;
  [key: string]: any;
}

export const SubmitButton = ({
  submitting,
  children,
  ...props
}: SubmitButtonProps): JSX.Element => (
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
