import { useState } from 'react';

import axios from 'axios';
import { useForm } from 'react-hook-form';

import toast from 'react-hot-toast';

const useFormRequest = (actions) => {
  const { onSuccess = () => {}, onError = () => {} } = actions || {
    onSuccess: () => {},
    onError: () => {},
  };

  const [submitting, isSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
  });

  const handleServerResponse = (ok, msg) => {
    isSubmitting(false);
    if (ok) {
      onSuccess();
      toast.success(msg);
    } else {
      onError();
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

  const handleFinished = (e) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
  };

  return {
    submitting,
    errors,
    register,
    handleFinished,
  };
};

export default useFormRequest;
