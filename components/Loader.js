/** @jsx jsx **/
import { jsx, css, keyframes } from '@emotion/core';
import tw from 'twin.macro';

function Loader() {
	const spinner = keyframes`
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	`;

	return (
		<div css={tw`flex h-full items-center justify-center w-full`}>
			<div
				css={css`
					${tw`border-gray-200 ease-linear rounded-full border-8 border-t-8  h-10 w-10 `}
					border-top-color: #3498db;
					animation: ${spinner} 0.5s linear infinite;
				`}
			></div>
		</div>
	);
}

export default Loader;
