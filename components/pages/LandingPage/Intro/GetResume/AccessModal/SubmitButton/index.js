import { SubmitArrow } from '../styles';

export const SubmitButton = ({ submitting, children, ...props }) => (
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
