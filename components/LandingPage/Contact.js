import React, { useState } from 'react';
import axios from 'axios';

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
			<div className="bg-main-light flex">
				<div className="w-1/2">
					{/* Address Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US Lets Talk +1 */}
					{/* 800 1236879 General Support contact@example.com */}
				</div>
				<div className="w-1/2 flex-col">
					<form onSubmit={handleOnSubmit}>
						<label className="w-full flex mt-4" htmlFor="email">
							<p className="text-base text-primary text-right w-1/3">Email:</p>
							<input
								className="w-2/3 rounded-md mx-4"
								id="email"
								type="email"
								name="email"
								required
								onChange={handleOnChange}
								value={inputs.email}
							/>
						</label>
						<label className="w-full flex mt-4" htmlFor="message">
							<p className="text-base text-primary text-right w-1/3">Message:</p>
							<textarea
								className="w-2/3 rounded-md mx-4"
								id="message"
								name="message"
								onChange={handleOnChange}
								value={inputs.message}
							/>
						</label>

						<div className="w-full flex mt-4">
							<p className="text-base text-primary text-right w-1/3" />
							<button
								type="submit"
								className="ml-1 bg-primary h-8 rounded-md text-white w-32"
								disabled={serverState.submitting}
							>
								Submit
							</button>
						</div>
						{serverState.status && (
							<p className={!serverState.status.ok ? 'errorMsg' : ''}>
								{serverState.status.msg}
							</p>
						)}
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
