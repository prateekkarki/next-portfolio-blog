import React, { useRef, useEffect } from 'react';
import anime from 'animejs';
import Link from 'next/link';
import tw, { css } from 'twin.macro';

import Programmer from './Programmer';

function Intro() {
	const introRef = useRef(null);

	useEffect(() => {
		anime({
			targets: introRef.current.querySelectorAll('p'),
			translateY: ['100%', 0],
			easing: 'easeInOutQuad',
			duration: 800,
			delay: anime.stagger(250),
		});
		anime({
			targets: introRef.current.querySelectorAll('a'),
			scale: [0, 1],
			easing: 'easeOutBack',
			duration: 750,
			delay: anime.stagger(150, { start: 1000 }),
		});
	});

	return (
		<div
			css={css`
				height: 400px;
				@media (min-width: 768px) {
					height: 700px;
				}
			`}
		>
			<div css={tw`container flex h-full items-center justify-center mx-auto`}>
				<div ref={introRef} css={tw`w-full px-3 sm:px-0 md:w-1/2 text-center md:text-left`}>
					<div css={tw`overflow-y-hidden`}>
						<p css={tw`text-primary font-semibold text-2xl`}>
							Hello, I&apos;m <span css={tw`text-secondary`}>Prateek Karki</span>
						</p>
					</div>

					<div css={tw`overflow-y-hidden`}>
						<p css={tw`text-primary text-5xl font-bold `}>Javascript Developer</p>
					</div>

					<div css={tw`overflow-y-hidden`}>
						<p css={tw`text-light text-base font-normal mt-2 `}>
							Tech lead | Software Engineer | Frontend | Backend
						</p>
					</div>
					<div css={tw`flex gap-10 justify-center md:justify-start mt-4`}>
						<Link href="/#contact" as="/#contact" passHref>
							<a
								css={tw`
										w-40 py-4 focus:outline-none rounded-full 
										bg-primary shadow-primary 
										font-semibold text-base text-white text-center
									`}
							>
								Hire Me
							</a>
						</Link>
						<a
							target="_blank"
							rel="noreferrer"
							href={process.env.NEXT_PUBLIC_RESUME_LINK}
							css={tw`
									w-40 focus:outline-none rounded-full 
									bg-secondary font-semibold text-base py-4 
									text-white shadow-secondary text-center
								`}
						>
							Get Resume
						</a>
					</div>
				</div>
				<div css={tw`hidden md:block w-1/2`}>
					<Programmer />
				</div>
			</div>
		</div>
	);
}

export default Intro;
