import React, { useState } from 'react';
import axios from 'axios';
import { IoMdPin, IoIosCall, IoIosMail } from 'react-icons/io';

import TitleBlock from './TitleBlock';

function Contact() {
	const [inputs, setInputs] = useState({
		email: '',
		message: '',
	});
	const handleOnChange = (event) => {
		event.persist();
		setInputs((prev) => ({
			...prev,
			[event.target.id]: event.target.value,
		}));
	};
	/* End input state handling ^^^^ */

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
		if (ok) {
			setInputs({
				email: '',
				message: '',
			});
		}
	};
	const handleOnSubmit = (event) => {
		event.preventDefault();
		setServerState({ submitting: true });
		axios({
			method: 'POST',
			url: 'https://formspree.io/pratiek.karki@gmail.com',
			data: inputs,
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
					<form className="w-full max-w-lg" onSubmit={handleOnSubmit}>
						<div className="flex flex-wrap mb-6">
							<div className="w-full sm:w-1/2 px-3 mb-6 sm:mb-0">
								<label
									className="block uppercase  tracking-wide text-primary text-xs font-bold mb-2"
									htmlFor="full-name"
								>
									Full Name
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-secondary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="full-name"
									type="text"
									placeholder="Jane"
									onChange={handleOnChange}
									value={inputs.fullName}
								/>
								<p className="text-secondary text-xs italic">
									Please fill out this field.
								</p>
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
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="email"
									type="email"
									onChange={handleOnChange}
									value={inputs.email}
								/>
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
									className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
									id="message"
									onChange={handleOnChange}
									value={inputs.message}
								/>
							</div>
						</div>
						<div className="sm:flex sm:items-center px-3">
							<div className="sm:w-1/3">
								<button
									className="shadow bg-primary hover:bg-primary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
									type="button"
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
