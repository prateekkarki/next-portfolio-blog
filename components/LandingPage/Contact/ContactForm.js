/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import tw from 'twin.macro';
import { toast } from 'react-toastify';

function ContactForm() {
	const { register, handleSubmit, errors } = useForm();

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

	const onSubmit = (data) => {
		const newData = { ...data, _replyto: data.email };
		setServerState({ submitting: true });

		axios({
			method: 'POST',
			url: 'https://getform.io/f/55a243e6-bf8e-4554-be3e-ef8bd41e2acb',
			data: newData,
			headers: { Accept: 'application/json' },
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
		<form onSubmit={handleSubmit(onSubmit)} css={tw`w-full max-w-lg`}>
			<div css={tw`flex flex-wrap mb-6`}>
				<div css={tw`w-full px-3 sm:mb-0`}>
					<label
						css={tw`block uppercase  tracking-wide text-primary text-xs font-bold mb-2`}
						htmlFor="full-name"
					>
						Full Name
					</label>
					<input
						css={[
							tw`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`,
							errors.fullName ? tw`border-secondary` : tw`border-light`,
						]}
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
								value: 3,
								message: 'Fullname must be at least 3 characters long.',
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
			<div css={tw`flex flex-wrap mb-6`}>
				<div css={tw`w-full px-3`}>
					<label
						css={tw`block uppercase  tracking-wide text-primary text-xs font-bold mb-2`}
						htmlFor="grid-password"
					>
						E-mail
					</label>
					<input
						css={[
							tw`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`,
							errors.email ? tw`border-secondary` : tw`border-light`,
						]}
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
			<div css={tw`flex flex-wrap mb-6`}>
				<div css={tw`w-full px-3`}>
					<label
						css={tw`block uppercase  tracking-wide text-primary text-xs font-bold mb-2`}
						htmlFor="grid-password"
					>
						Message
					</label>
					<textarea
						css={[
							tw`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none`,
							errors.message ? tw`border-secondary` : tw`border-light`,
						]}
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
								value: 3,
								message: 'Message must be at least 3 characters long.',
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
					<button
						css={tw`shadow bg-primary hover:bg-primary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}
						type="submit"
						disabled={serverState.submitting}
					>
						Send
					</button>
				</div>
			</div>
		</form>
	);
}

export default ContactForm;
