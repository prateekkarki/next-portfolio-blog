import React, { useState } from 'react';

import { BigButton } from 'components/styles';
import { useDisableBodyScroll } from 'hooks';
import AccessModal from './AccessModal';

function Index(): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);
  useDisableBodyScroll(modalOpen);

  return (
    <>
      <AccessModal
        modalOpen={modalOpen}
        handleClose={() => {
          setModalOpen(false);
        }}
      />
      <BigButton
        onClick={() => {
          setModalOpen(true);
        }}
        variant="secondary"
        tw="pl-10"
      >
        Get Resume
      </BigButton>
    </>
  );
}

export default Index;
