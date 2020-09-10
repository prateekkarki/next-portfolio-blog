import React from 'react';
import PropTypes from 'prop-types';

import { css } from 'twin.macro';

function TitleBlock({ title, subtitle }) {
	return (
		<div className="flex flex-col items-center text-center py-6">
			<h2 className="font-bold text-primary text-5xl">{title}</h2>
			<p
				className="font-normal text-base text-light"
				css={css`
					letter-spacing: 2.5px;
					line-height: 19.2px;
				`}
			>
				{subtitle}
			</p>
			<div className="w-64 relative h-6 mt-6">
				<div
					className="w-full absolute top-0 bg-primary rounded-full h-1"
					css={css`
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					`}
				/>
				<div
					className="w-12 absolute top-0 bg-primary rounded-full h-3"
					css={css`
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					`}
				/>
			</div>
		</div>
	);
}

TitleBlock.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
};
export default TitleBlock;
