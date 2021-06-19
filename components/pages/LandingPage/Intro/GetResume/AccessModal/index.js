import Close from 'components/Common/Icons/Close';
import { FaArrowRight } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import tw from 'twin.macro';
import { StyledModal, customStyles, CloseButton } from './styles';

function Index({ modalOpen, handleClose }) {
  return (
    <StyledModal
      isOpen={modalOpen}
      closeTimeoutMS={350}
      onRequestClose={handleClose}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Resources"
    >
      <CloseButton type="button" onClick={handleClose}>
        <Close />
      </CloseButton>

      <label htmlFor="accessCode" tw="font-normal text-dark-700 ">
        Please enter your access code to view the resume.
      </label>
      <div tw="width[420px] max-w-full mt-2 bg-dark-800 rounded-lg flex flex-wrap justify-start md:flex-row">
        <input
          id="accessCode"
          type="email"
          tw="rounded-lg p-4 appearance-none
          width[calc(100% - 52px)]
          text-dark-200 bg-dark-800
          focus:outline-none text-sm"
          placeholder="Enter your access code"
        />
        <button
          tw="width[44px] m-1 p-2 outline-none focus:outline-none text-sm bg-successBright text-dark-800 rounded-lg font-semibold uppercase flex items-center justify-center"
          type="submit"
        >
          <FaArrowRight tw="w-6 h-6" />
        </button>
      </div>

      <div tw="mt-4 flex items-end ">
        <p tw="inline font-light text-dark-700 ">Don’t have a access code? </p>
        <button
          type="button"
          tw="inline outline-none focus:outline-none font-light ml-2 text-primary
          border-b-2 border-dashed border-primary
          hover:(border-light-primary text-light-primary)"
        >
          Get one here.
        </button>
      </div>
    </StyledModal>
  );
}

export default Index;
