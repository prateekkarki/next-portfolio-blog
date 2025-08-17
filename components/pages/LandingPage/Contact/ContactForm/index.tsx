/* eslint-disable implicit-arrow-linebreak */
import React, { useState, ReactElement } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import tw, { css } from 'twin.macro';
import toast from 'react-hot-toast';

import { BigButton } from '@/components/styles';
import { ContactFormData } from '@/types';
import { ContactInput, ContactTextarea, ContactLabel } from './styles';

function ContactForm(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    mode: 'onSubmit',
  });

  // Server state handling
  const [submitting, isSubmitting] = useState(false);

  const handleServerResponse = (ok: boolean, msg: string) => {
    isSubmitting(false);
    if (ok) {
      toast.success(msg);
    } else {
      toast.error(msg);
    }
  };

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');

  const onSubmit = (data: ContactFormData) => {
    const newData = encode({ ...data, _replyto: data.email });
    isSubmitting(true);

    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xdolrnlo',
      data: newData,
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      name="contact"
      css={tw`w-full max-w-lg`}
    >
      <div css={tw`flex flex-col md:flex-row`}>
        <div css={tw`flex flex-wrap mb-6 w-full md:w-1/2`}>
          <div css={tw`w-full px-3 sm:mb-0`}>
            <ContactLabel hasError={!!errors.fullName} htmlFor="fullName">
              Full Name
            </ContactLabel>

            <ContactInput
              hasError={!!errors.fullName}
              id="fullName"
              type="text"
              placeholder="John Doe"
              {...register('fullName', {
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
            <ContactLabel hasError={!!errors.email} htmlFor="email">
              E-mail
            </ContactLabel>
            <ContactInput
              hasError={!!errors.email}
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              {...register('email', {
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
          <ContactLabel hasError={!!errors.message} htmlFor="message">
            Message
          </ContactLabel>
          <ContactTextarea
            hasError={!!errors.message}
            id="message"
            placeholder="Type your message here"
            {...register('message', {
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
              {errors.message.message || 'Please enter a message.'}
            </p>
          )}
        </div>
      </div>
      <div css={tw`sm:flex sm:items-center px-3`}>
        <div css={tw`sm:w-1/3`}>
          <BigButton
            css={[
              tw`w-full sm:w-40`,
              css`& > div { 
                width: 100%;
                ${tw`w-full sm:w-40`}
              }`,
            ]}
            type="submit"
            disabled={submitting}
          >
            Send Message
          </BigButton>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
