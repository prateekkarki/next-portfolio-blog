/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import tw from 'twin.macro';

import { IoMdPin, IoIosCall, IoIosMail } from 'react-icons/io';

import TitleBlock from './TitleBlock';

function Contact() {
	const { register, handleSubmit, errors } = useForm();

	// Server state handling
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null,
	});
	const handleServerResponse = (ok, msg) => {
		console.log(ok, msg);
		setServerState({
			submitting: false,
			status: { ok, msg },
		});
	};

	const onSubmit = (data) => {
		console.log(data);
		data = { ...data, _replyto: data.email };
		setServerState({ submitting: true });
		axios({
			method: 'POST',
			url: 'https://formspree.io/pratiek.karki@gmail.com',
			data,
		})
			.then(() => {
				handleServerResponse(true, 'Thanks!');
			})
			.catch((r) => {
				handleServerResponse(false, r.response.data.error);
			});
	};

	return (
		<div>
			<TitleBlock title="Contact Me" subtitle="Send me a message" />
			<div className="bg-main-light flex flex-col sm:flex-row">
				<div className="w-full sm:w-1/2  py-6 text-center">
					<div className="flex flex-col items-center">
						<IoMdPin className="text-primary text-xl" />
						<h3 className="font-bold text-primary">Address</h3>
						<p className="text-light">New Baneshwor,</p>
						<p className="text-light">Kathmandu, Nepal.</p>
					</div>
					<div className="flex flex-col items-center mt-6">
						<IoIosCall className="text-primary text-xl" />
						<h3 className="font-bold text-primary">Lets Talk</h3>
						<a className="text-light hover:text-primary" href="tel:+977984241xxxx">
							+977 984 241 XXXX
						</a>
					</div>
					<div className="flex flex-col items-center mt-6">
						<IoIosMail className="text-primary text-xl" />
						<h3 className="font-bold text-primary">Write to me</h3>
						<a
							className="text-light hover:text-primary"
							href="mailto:info@meetprateek.com"
						>
							info@meetprateek.com
						</a>
					</div>
					{/* Address Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US Lets Talk +1 */}
					{/* 800 1236879 General Support contact@example.com */}
				</div>
				<div className="w-full sm:w-1/2 flex flex-col items-center py-6">
					<form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
						<div className="flex flex-wrap mb-6">
							<div className="w-full px-3 mb-6 sm:mb-0">
								<label
									className="block uppercase  tracking-wide text-primary text-xs font-bold mb-2"
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
											message:
												'Fullname cannot be more than 30 characters long.',
										},
										minLength: {
											value: 3,
											message: 'Fullname must be at least 3 characters long.',
										},
									})}
								/>
								{errors.fullName && (
									<p className="text-secondary text-xs italic">
										{errors.fullName.message || 'Please enter your full name.'}
									</p>
								)}
							</div>
						</div>
						<div className="flex flex-wrap mb-6">
							<div className="w-full px-3">
								<label
									className="block uppercase  tracking-wide text-primary text-xs font-bold mb-2"
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
									<p className="text-secondary text-xs italic">
										{errors.email.message || 'Please enter your email.'}
									</p>
								)}
							</div>
						</div>
						<div className="flex flex-wrap mb-6">
							<div className="w-full px-3">
								<label
									className="block uppercase  tracking-wide text-primary text-xs font-bold mb-2"
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
									ref={register({
										required: 'Please enter the message.',
										maxLength: {
											value: 800,
											message:
												'Message cannot be more than 800 characters long.',
										},
										minLength: {
											value: 3,
											message: 'Message must be at least 3 characters long.',
										},
									})}
								/>
								{errors.message && (
									<p className="text-secondary text-xs italic">
										{errors.message.message || 'Please enter your email.'}
									</p>
								)}
							</div>
						</div>
						<div className="sm:flex sm:items-center px-3">
							<div className="sm:w-1/3">
								<button
									className="shadow bg-primary hover:bg-primary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
									type="submit"
									disabled={serverState.submitting}
								>
									Send
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
