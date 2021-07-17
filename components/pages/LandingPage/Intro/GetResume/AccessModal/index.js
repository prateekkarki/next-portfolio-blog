import Close from 'components/Common/Icons/Close';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import tw from 'twin.macro';
import { CSSTransition } from 'react-transition-group';
import { StyledModal, customStyles, CloseButton } from './styles';

function Index({ modalOpen, handleClose }) {
  const [codeRequest, setCodeRequest] = useState(false);
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
      <div tw="overflow-hidden">
        <CSSTransition
          in={codeRequest}
          timeout={400}
          classNames="codeRequestForm"
        >
          <div className="formsContainer">
            <div className="accessForms">
              <label htmlFor="accessEmail" tw="font-normal text-dark-700 ">
                To request the access code, please enter your email below.
              </label>
              <div tw="width[420px] max-w-full mt-2 bg-dark-800 rounded-lg flex flex-wrap justify-start md:flex-row">
                <input
                  id="accessEmail"
                  type="email"
                  tw="rounded-lg p-4 appearance-none
                    width[calc(100% - 52px)]
                    text-dark-200 bg-dark-800
                    focus:outline-none text-sm"
                  placeholder="Enter your email address"
                />
                <button
                  tw="width[44px] m-1 p-2 outline-none focus:outline-none text-sm bg-successBright text-dark-800 rounded-lg font-semibold uppercase flex items-center justify-center"
                  type="submit"
                >
                  <FaArrowRight tw="w-6 h-6" />
                </button>
              </div>

              <div tw="mt-4 flex items-end ">
                <p tw="inline font-light text-dark-700 ">
                  Already have a access code?{' '}
                  <button
                    type="button"
                    tw="inline outline-none focus:outline-none font-light text-primary
                  border-b-2 border-dashed border-primary
                  hover:(border-light-primary text-light-primary)"
                    onClick={() => {
                      setCodeRequest(!codeRequest);
                    }}
                  >
                    Enter it here.
                  </button>
                </p>
              </div>
            </div>
            <div className="accessForms">
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
                <p tw="inline font-light text-dark-700 ">
                  Don’t have a access code?{' '}
                  <button
                    type="button"
                    tw="inline outline-none focus:outline-none font-light text-primary
          border-b-2 border-dashed border-primary
          hover:(border-light-primary text-light-primary)"
                    onClick={() => {
                      setCodeRequest(!codeRequest);
                    }}
                  >
                    Get one here.
                  </button>
                </p>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </StyledModal>
  );
}

export default Index;
