import Close from 'components/Common/Icons/Close';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import tw from 'twin.macro';
import { CSSTransition } from 'react-transition-group';

import axios from 'axios';
import { useForm } from 'react-hook-form';

import toast from 'react-hot-toast';
import { StyledModal, customStyles, CloseButton } from './styles';

function Index({ modalOpen, handleClose }) {
  const [codeRequest, setCodeRequest] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
  });

  function openInNewTab(href) {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      href,
    }).click();
  }

  const [submitting, isSubmitting] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [code, setCode] = useState('');

  const onCodeSubmit = () => {
    if (code === process.env.NEXT_PUBLIC_RESUME_CODE) {
      setCode('');
      setCodeError(false);
      handleClose();
      openInNewTab(process.env.NEXT_PUBLIC_RESUME_LINK);
    } else {
      setCode('');
      setCodeError(true);
    }
  };

  const handleServerResponse = (ok, msg) => {
    isSubmitting(false);
    if (ok) {
      handleClose();
      toast.success(msg);
    } else {
      toast.error(msg);
    }
  };

  const onSubmit = (data) => {
    isSubmitting(true);

    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xdolrnlo',
      data,
    })
      .then(() => {
        handleServerResponse(
          true,
          "Thanks for reaching out! I'll get back to you soon."
        );
        reset();
      })
      .catch((r) => {
        if (r.response?.data?.error) {
          handleServerResponse(false, r.response.data.error);
        } else if (r.message) {
          handleServerResponse(false, r.message);
        } else {
          handleServerResponse(false, r.toString());
        }
      });
  };
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
              <form onSubmit={handleSubmit(onSubmit)} name="resumeRequest">
                <label htmlFor="accessEmail" tw="font-normal text-dark-700 ">
                  To request the access code, please enter your email below.
                </label>
                <div tw="width[420px] max-w-full mt-2 bg-dark-800 rounded-lg flex flex-wrap justify-start md:flex-row">
                  <input
                    id="accessEmail"
                    type="text"
                    name="accessEmail"
                    tw="rounded-lg p-4 appearance-none
                    width[calc(100% - 52px)]
                    text-dark-200 bg-dark-800
                    focus:outline-none text-sm"
                    placeholder="john.doe@example.com"
                    noValidate
                    {...register('accessEmail', {
                      required: 'Please enter your email.',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address.',
                      },
                    })}
                  />
                  <button
                    tw="width[44px] m-1 p-2 outline-none focus:outline-none text-sm bg-successBright text-dark-800 rounded-lg font-semibold uppercase flex items-center justify-center"
                    type="submit"
                    disabled={submitting}
                  >
                    <FaArrowRight tw="w-6 h-6" />
                  </button>
                </div>

                {errors.accessEmail && (
                  <p css={tw`text-secondary text-xs italic pt-2`}>
                    {errors.accessEmail.message || 'Please enter your email.'}
                  </p>
                )}
              </form>

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
              <div tw="width[180px] max-w-full mt-2 bg-dark-800 rounded-lg flex flex-wrap justify-start md:flex-row">
                <input
                  id="accessCode"
                  type="email"
                  tw="rounded-lg p-4 appearance-none
                        width[calc(100% - 52px)]
                        text-dark-200 bg-dark-800
                        focus:outline-none text-sm"
                  placeholder="XXXXX"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
                <button
                  tw="width[44px] m-1 p-2 outline-none focus:outline-none text-sm bg-successBright text-dark-800 rounded-lg font-semibold uppercase flex items-center justify-center"
                  type="button"
                  onClick={onCodeSubmit}
                >
                  <FaArrowRight tw="w-6 h-6" />
                </button>
              </div>

              {codeError && (
                <p css={tw`text-secondary text-xs italic pt-2`}>
                  Code does not match. Please request one below.
                </p>
              )}

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
