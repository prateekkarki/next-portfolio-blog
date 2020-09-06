/** @jsx jsx * */
import { jsx } from '@emotion/core';
import { useState, useRef } from 'react';

import { IoIosCloseCircle } from 'react-icons/io';
import ReactModal from 'react-modal';

const modalStyles = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(255, 255, 255, 0.75)',
	},
	content: {
		position: 'absolute',
		width: '88%',
		top: '50%',
		left: '50%',
		border: '1px solid #ccc',
		background: '#fff',
		overflow: 'auto',
		WebkitOverflowScrolling: 'touch',
		borderRadius: '4px',
		outline: 'none',
		padding: '20px',
		height: 'fit-content',
	},
};

function Footer() {
	const [modalOpen, setModalOpen] = useState(false);
	const el = useRef(null);
	return (
		<div className="bg-main-dark border-main-light border-solid border-t-2 py-4">
			<div className="container mx-auto text-white" ref={el}>
				<ReactModal
					isOpen={modalOpen}
					closeTimeoutMS={350}
					onRequestClose={() => {
						setModalOpen(false);
					}}
					appElement={el.current}
					style={modalStyles}
					contentLabel="Resources"
				>
					<div className="flex justify-between">
						<h1>Credits</h1>
						<button
							type="button"
							className="text-lg focus:outline-none"
							onClick={() => {
								setModalOpen(false);
							}}
						>
							<IoIosCloseCircle className="w-8 h-8" />
						</button>
					</div>
					<div className="sm:flex sm:flex-wrap">
						<div className="mt-8 text-center sm:text-left sm:w-1/2 lg:w-1/4 sm:inline-block">
							<h2>Frontend</h2>
							<ul>
								<li>
									<a target="_blank" rel="noreferrer" href="https://nextjs.org/docs">
										NextJS
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="http://reactjs.org/">
										ReactJS
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://tailwindcss.com/">
										Tailwind
									</a>
								</li>
							</ul>
						</div>
						<div className="mt-8 text-center sm:text-left sm:w-1/2 lg:w-1/4 sm:inline-block">
							<h2>Backend</h2>
							<ul>
								<li>
									<a target="_blank" rel="noreferrer" href="https://graphql.org/">
										GraphQL
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="http://strapi.io/">
										Strapi
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://www.netlify.com/">
										Netlify
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://cloudinary.com/">
										Cloudinary
									</a>
								</li>
							</ul>
						</div>
						<div className="mt-8 text-center sm:text-left sm:w-1/2 lg:w-1/4 sm:inline-block">
							<h2>Design</h2>
							<ul>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://dribbble.com/shots/11360621-Cv-Resume-One-Page-XD-PSD-Template-Free"
									>
										UI Design
									</a>{' '}
									by{' '}
									<a target="_blank" rel="noreferrer" href="https://dribbble.com/createuiux">
										Tauhid Hasan
									</a>
								</li>
							</ul>
						</div>
						<div className="mt-8 text-center sm:text-left sm:w-1/2 lg:w-1/4 sm:inline-block">
							<h2>Graphics</h2>
							<ul>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://dribbble.com/shots/6139167-Avento-marketing"
									>
										Avento marketing
									</a>{' '}
									by{' '}
									<a target="_blank" rel="noreferrer" href="https://dribbble.com/peterhenderson">
										Peter Henderson
									</a>
								</li>
							</ul>
							<ul>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.freepik.com/free-vector/colourful-illustration-programmer-working_5483080.htm"
									>
										Colourful illustration of programmer
									</a>{' '}
									by{' '}
									<a target="_blank" rel="noreferrer" href="https://www.freepik.com/">
										Freepik
									</a>
								</li>
							</ul>
						</div>
					</div>
				</ReactModal>
				<p>
					Made with ❤️ by me. Thanks to these{' '}
					<button
						type="button"
						className="underline text-gray-600 focus:outline-none"
						onClick={() => {
							setModalOpen(true);
						}}
					>
						awesome projects
					</button>
					.
				</p>
			</div>
		</div>
	);
}

export default Footer;
