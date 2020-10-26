/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import tw from 'twin.macro';
import { toast } from 'react-toastify';

import {
  ContactInput,
  ContactTextarea,
  BigButton,
  ContactLabel,
} from '../../styled';

function ContactForm() {
  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onSubmit',
  });

  // Server state handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
  };

  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');

  const onSubmit = (data) => {
    const newData = encode({ ...data, 'form-name': 'contact' });
    setServerState({ submitting: true });

    axios({
      method: 'POST',
      url: '/',
      data: newData,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then(() => {
        handleServerResponse(true, 'Thanks!');
        toast.success("Thanks for reaching out! I'll get back to you soon.", {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset();
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error);

        toast.error(r.response.data.error, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      name="contact"
      css={tw`w-full max-w-lg`}
      netlify="true"
      data-netlify="true"
    >
      <div css={tw`flex flex-col md:flex-row`}>
        <div css={tw`flex flex-wrap mb-6 w-full md:w-1/2`}>
          <div css={tw`w-full px-3 sm:mb-0`}>
            <ContactLabel hasError={errors.fullName} htmlFor="fullName">
              Full Name
            </ContactLabel>

            <ContactInput
              hasError={errors.fullName}
              id="fullName"
              name="fullName"
              type="text"
              placeholder="John Doe"
              ref={register({
                required: 'Please enter your full name.',
                maxLength: {
                  value: 30,
                  message: 'Fullname cannot be more than 30 characters long.',
                },
                minLength: {
                  value: 5,
                  message: 'Fullname must be at least 5 characters long.',
                },
              })}
            />
            {errors.fullName && (
              <p css={tw`text-secondary text-xs italic`}>
                {errors.fullName.message || 'Please enter your full name.'}
              </p>
            )}
          </div>
        </div>
        <div css={tw`flex flex-wrap mb-6 w-full md:w-1/2`}>
          <div css={tw`w-full px-3`}>
            <ContactLabel hasError={errors.email} htmlFor="email">
              E-mail
            </ContactLabel>
            <ContactInput
              hasError={errors.email}
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              ref={register({
                required: 'Please enter your email.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address.',
                },
              })}
            />
            {errors.email && (
              <p css={tw`text-secondary text-xs italic`}>
                {errors.email.message || 'Please enter your email.'}
              </p>
            )}
          </div>
        </div>
      </div>
      <div css={tw`flex flex-wrap mb-6`}>
        <div css={tw`w-full px-3`}>
          <ContactLabel hasError={errors.message} htmlFor="message">
            Message
          </ContactLabel>
          <ContactTextarea
            hasError={errors.message}
            id="message"
            name="message"
            placeholder="Type your message here"
            ref={register({
              required: 'Please enter the message.',
              maxLength: {
                value: 800,
                message: 'Message cannot be more than 800 characters long.',
              },
              minLength: {
                value: 15,
                message: 'Message must be at least 15 characters long.',
              },
            })}
          />
          {errors.message && (
            <p css={tw`text-secondary text-xs italic`}>
              {errors.message.message || 'Please enter your email.'}
            </p>
          )}
        </div>
      </div>
      <div css={tw`sm:flex sm:items-center px-3`}>
        <div css={tw`sm:w-1/3`}>
          <BigButton
            css={tw`w-full sm:w-40`}
            type="submit"
            disabled={serverState.submitting}
          >
            Send Message
          </BigButton>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
