/** @jsx jsx * */
import { jsx } from '@emotion/core';
import { useState, useRef } from 'react';
import styled from '@emotion/styled';

import { IoIosCloseCircle } from 'react-icons/io';
import Modal from 'react-modal';
import tw from 'twin.macro';

const StyledModal = styled(Modal)`
	${tw`bg-main-light w-11/12 overflow-auto rounded-md p-6`}
	border: 1px solid #ccc;
	overflow: auto;
	height: fit-content;

	&.ReactModal__Content {
		opacity: 0;
		transform: scale(0);
		transition: all 350ms ease-in-out;
		transform-origin: center;
	}

	&.ReactModal__Content--after-open {
		opacity: 1;
		transform: scale(1);
	}

	&.ReactModal__Content--before-close {
		opacity: 0;
		transform: scale(0);
	}
`;

function Footer() {
	const [modalOpen, setModalOpen] = useState(false);
	const el = useRef(null);
	return (
		<div className="bg-main-dark border-main-light border-solid border-t-2 py-4">
			<div className="container mx-auto text-white" ref={el}>
				<StyledModal
					isOpen={modalOpen}
					closeTimeoutMS={350}
					onRequestClose={() => {
						setModalOpen(false);
					}}
					appElement={el.current}
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
									<a
										target="_blank"
										rel="noreferrer"
										href="https://nextjs.org/docs"
									>
										NextJS
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="http://reactjs.org/">
										ReactJS
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://tailwindcss.com/"
									>
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
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.netlify.com/"
									>
										Netlify
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://cloudinary.com/"
									>
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
									<a
										target="_blank"
										rel="noreferrer"
										href="https://dribbble.com/createuiux"
									>
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
									<a
										target="_blank"
										rel="noreferrer"
										href="https://dribbble.com/peterhenderson"
									>
										Peter Henderson
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.vecteezy.com/vector-art/615323-p-logo-letter-business-corporate-design"
									>
										Favicon logo
									</a>{' '}
									by{' '}
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.vecteezy.com/free-vector/business"
									>
										Vecteezy
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.freepik.com/free-vector/colourful-illustration-programmer-working_5483080.htm"
									>
										Colourful illustration of programmer
									</a>{' '}
									by{' '}
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.freepik.com/"
									>
										Freepik
									</a>
								</li>
							</ul>
						</div>
					</div>
				</StyledModal>
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
