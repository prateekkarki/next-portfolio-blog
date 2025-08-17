import React, { useState, ReactElement } from 'react';
import Close from 'components/Common/Icons/Close';
import { FaArrowRight } from 'react-icons/fa';
import tw from 'twin.macro';
import { CSSTransition } from 'react-transition-group';

import { useFormRequest } from 'hooks';
import {
  StyledModal,
  customStyles,
  CloseButton,
  Label,
  SuggestionButton,
  ErrorText,
  SuggestionText,
} from './styles';
import SubmitButton from './SubmitButton';

function openInNewTab(href: string) {
  Object.assign(document.createElement('a'), {
    target: '_blank',
    href,
  }).click();
}

interface IndexProps {
  modalOpen: boolean;
  handleClose: () => void;
}

function Index({ modalOpen, handleClose }: IndexProps): ReactElement {
  const [codeRequest, setCodeRequest] = useState(false);
  const { submitting, register, errors, handleFinished } = useFormRequest({
    onSuccess: () => {
      handleClose();
    },
  });
  const [codeError, setCodeError] = useState(false);
  const [code, setCode] = useState('');

  const onCodeSubmit = () => {
    if (code === process.env.NEXT_PUBLIC_RESUME_CODE) {
      setCode('');
      setCodeError(false);
      handleClose();
      openInNewTab(process.env.NEXT_PUBLIC_RESUME_LINK || '#');
    } else {
      setCode('');
      setCodeError(true);
    }
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
          <div
            className={`formsContainer ${
              codeRequest ? 'codeRequestForm-enter-done' : ''
            }`}
          >
            <div className="accessForms">
              <form onSubmit={handleFinished} name="resumeRequest">
                <Label htmlFor="accessEmail">
                  To request the access code, please enter your email below.
                </Label>
                <div tw="width[420px] max-w-full mt-2 bg-dark-800 rounded-lg flex flex-wrap justify-start md:flex-row">
                  <input
                    id="accessEmail"
                    type="text"
                    name="accessEmail"
                    tw="rounded-lg p-4 appearance-none width[calc(100% - 52px)] text-dark-200 bg-dark-800 focus:outline-none text-sm"
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
                  <SubmitButton type="submit" submitting={submitting}>
                    <FaArrowRight tw="w-6 h-6" />
                  </SubmitButton>
                </div>

                {errors.accessEmail && (
                  <ErrorText>{errors.accessEmail.message}</ErrorText>
                )}
              </form>

              <div tw="mt-4 flex items-end">
                <SuggestionText>
                  Already have a access code?{' '}
                  <SuggestionButton
                    type="button"
                    onClick={() => {
                      setCodeRequest(!codeRequest);
                    }}
                  >
                    Enter it here.
                  </SuggestionButton>
                </SuggestionText>
              </div>
            </div>
            <div className="accessForms">
              <Label htmlFor="accessCode">
                Please enter your access code to view the resume.
              </Label>
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
                  onFocus={() => {
                    setCodeError(false);
                  }}
                />
                <SubmitButton type="button" onClick={onCodeSubmit}>
                  <FaArrowRight tw="w-6 h-6" />
                </SubmitButton>
              </div>

              {codeError && (
                <ErrorText>
                  Code does not match. Please request one below.
                </ErrorText>
              )}

              <div tw="mt-4 flex items-end ">
                <SuggestionText>
                  Don’t have a access code?{' '}
                  <SuggestionButton
                    type="button"
                    onClick={() => {
                      setCodeRequest(!codeRequest);
                    }}
                  >
                    Request one here.
                  </SuggestionButton>
                </SuggestionText>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </StyledModal>
  );
}

export default Index;
