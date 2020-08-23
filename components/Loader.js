import React from 'react';

function Loader() {
	return (
		<div className="flex h-full items-center justify-center w-full">
			<div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-10 w-10"></div>
		</div>
	);
}

export default Loader;
