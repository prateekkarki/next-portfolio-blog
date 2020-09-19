/** @jsx jsx */
import { jsx } from '@emotion/core';

import TitleBlock from '../TitleBlock';
import ContactForm from './ContactForm';

function Contact() {
	return (
		<div>
			<TitleBlock title="Contact Me" subtitle="Send me a message" />
			<div className="bg-main-light">
				<div className="container mx-auto flex flex-col sm:flex-row">
					<div className="w-full sm:w-1/2 py-6 px-3 flex flex-col justify-center items-center text-center sm:justify-start md:items-start sm:text-left">
						<div className="">
							<h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
								Get in touch
							</h1>
							<p className="text-white">
								I love to develop things for the web. I also speak, teach, and
								consult at tech companies and startups. If you want to get started
								with a project or just need my help, feel free to contact me.
							</p>
						</div>
					</div>
					<div className="w-full sm:w-1/2 flex flex-col items-center py-6">
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
