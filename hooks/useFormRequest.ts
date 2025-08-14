import { useState } from 'react';
import axios from 'axios';
import { useForm, FieldValues } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FormActions, UseFormRequestReturn } from '@/types';

const useFormRequest = (actions?: FormActions): UseFormRequestReturn => {
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

  const handleServerResponse = (ok: boolean, msg: string) => {
    isSubmitting(false);
    if (ok) {
      onSuccess();
      toast.success(msg);
    } else {
      onError(msg);
      toast.error(msg);
    }
  };
  const onSubmit = (data: FieldValues) => {
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

  const handleFinished = (e: React.FormEvent) => {
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
