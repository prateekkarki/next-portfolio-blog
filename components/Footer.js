/** @jsx jsx * */
import { jsx, css } from '@emotion/core';
import { useState, useRef } from 'react';
import styled from '@emotion/styled';

import { IoIosCloseCircle } from 'react-icons/io';
import Modal from 'react-modal';
import tw from 'twin.macro';

const StyledModal = styled(Modal)`
	${tw`bg-main-light w-11/12 overflow-auto rounded-lg p-6`}
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

const overlayStyles = css`
	${tw`bg-main-dark`}
`;

function Footer() {
	const [modalOpen, setModalOpen] = useState(false);
	const el = useRef(null);
	return (
		<footer css={tw`bg-main-dark border-main-light border-solid border-t-2 py-4`}>
			<div css={overlayStyles} />
			<div css={tw`container mx-auto text-white`} ref={el}>
				<StyledModal
					isOpen={modalOpen}
					closeTimeoutMS={350}
					onRequestClose={() => {
						setModalOpen(false);
					}}
					appElement={el.current}
					contentLabel="Resources"
				>
					<div css={tw`flex justify-between`}>
						<h1 css={tw`text-white`}>Credits</h1>
						<button
							type="button"
							css={tw`text-lg focus:outline-none`}
							onClick={() => {
								setModalOpen(false);
							}}
						>
							<IoIosCloseCircle css={tw`w-8 h-8 text-white`} />
						</button>
					</div>
					<div css={tw`sm:flex sm:flex-wrap`}>
						<div
							css={tw`mt-8 text-center sm:text-left sm:w-1/2 md:w-1/3 sm:inline-block`}
						>
							<h2 css={tw`text-white`}>Frontend</h2>
							<ul>
								<li css={tw`text-light`}>
									<a
										target="_blank"
										css={tw`text-primary`}
										rel="noreferrer"
										href="https://nextjs.org/docs"
									>
										NextJS
									</a>
								</li>
								<li css={tw`text-light`}>
									<a
										target="_blank"
										rel="noreferrer"
										css={tw`text-primary`}
										href="http://reactjs.org/"
									>
										ReactJS
									</a>
								</li>
								<li css={tw`text-light`}>
									<a
										target="_blank"
										css={tw`text-primary`}
										rel="noreferrer"
										href="https://tailwindcss.com/"
									>
										Tailwind
									</a>
								</li>
							</ul>
						</div>
						<div
							css={tw`mt-8 text-center sm:text-left sm:w-1/2 md:w-1/3 sm:inline-block`}
						>
							<h2 css={tw`text-white`}>Backend</h2>
							<ul>
								<li css={tw`text-light`}>
									<a
										target="_blank"
										css={tw`text-primary`}
										rel="noreferrer"
										href="https://graphql.org/"
									>
										GraphQL
									</a>
								</li>
								<li css={tw`text-light`}>
									<a
										target="_blank"
										css={tw`text-primary`}
										rel="noreferrer"
										href="http://strapi.io/"
									>
										Strapi
									</a>
								</li>
								<li css={tw`text-light`}>
									<a
										target="_blank"
										css={tw`text-primary`}
										rel="noreferrer"
										href="https://www.netlify.com/"
									>
										Netlify
									</a>
								</li>
								<li css={tw`text-light`}>
									<a
										target="_blank"
										css={tw`text-primary`}
										rel="noreferrer"
										href="https://cloudinary.com/"
									>
										Cloudinary
									</a>
								</li>
							</ul>
						</div>
						<div
							css={tw`mt-8 text-center sm:text-left sm:w-1/2 md:w-1/3 sm:inline-block`}
						>
							<h2 css={tw`text-white`}>Design / Graphics</h2>
							<ul>
								<li css={tw`text-light`}>
									<a
										target="_blank"
										css={tw`text-primary`}
										rel="noreferrer"
										href="https://dribbble.com/shots/11360621-Cv-Resume-One-Page-XD-PSD-Template-Free"
									>
										UI Design
									</a>{' '}
									by{' '}
									<a
										target="_blank"
										css={tw`text-primary`}
										rel="noreferrer"
										href="https://dribbble.com/createuiux"
									>
										Tauhid Hasan
									</a>
								</li>
								<li css={tw`text-light`}>
									<a
										target="_blank"
										css={tw`text-primary`}
										rel="noreferrer"
										href="https://dribbble.com/shots/6139167-Avento-marketing"
									>
										Avento marketing
									</a>{' '}
									by{' '}
									<a
										target="_blank"
										css={tw`text-primary`}
										rel="noreferrer"
										href="https://dribbble.com/peterhenderson"
									>
										Peter Henderson
									</a>
								</li>
								<li css={tw`text-light`}>
									<a
										target="_blank"
										css={tw`text-primary`}
										rel="noreferrer"
										href="https://www.vecteezy.com/vector-art/615323-p-logo-letter-business-corporate-design"
									>
										Favicon logo
									</a>{' '}
									by{' '}
									<a
										target="_blank"
										css={tw`text-primary`}
										rel="noreferrer"
										href="https://www.vecteezy.com/free-vector/business"
									>
										Vecteezy
									</a>
								</li>
								<li css={tw`text-light`}>
									<a
										target="_blank"
										css={tw`text-primary`}
										rel="noreferrer"
										href="https://www.freepik.com/free-vector/colourful-illustration-programmer-working_5483080.htm"
									>
										Colourful illustration of programmer
									</a>{' '}
									by{' '}
									<a
										target="_blank"
										css={tw`text-primary`}
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
					Made with ❤️ by{' '}
					<a
						target="_blank"
						rel="noreferrer"
						css={tw`underline text-gray-600 focus:outline-none`}
						href="https://github.com/prateekkarki/"
					>
						me
					</a>
					. Thanks to these{' '}
					<button
						type="button"
						css={tw`underline text-gray-600 focus:outline-none`}
						onClick={() => {
							setModalOpen(true);
						}}
					>
						awesome projects
					</button>
					.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
