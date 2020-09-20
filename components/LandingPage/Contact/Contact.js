/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ImGithub, ImLinkedin2 } from 'react-icons/im';
import { IoIosMail } from 'react-icons/io';

import ContactForm from './ContactForm';

function Contact() {
	return (
		<div>
			<div className="bg-main-light">
				<div className="container mx-auto flex flex-col sm:flex-row">
					<div className="w-full sm:w-1/2 py-6 px-3 flex flex-col justify-center items-center text-center sm:justify-start md:items-start sm:text-left">
						<div className="flex flex-col justify-center items-center text-center sm:justify-start sm:items-start sm:text-left">
							<h1 className="font-bold text-white whitespace-no-wrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-huge">
								Get in touch.
							</h1>
							<p className="text-white text-md lg:text-lg">
								I love to develop things for the web. I have lead projects and teams
								to build great end-products for my clients. If you want to get
								started with a project or just need my help, feel free to contact
								me.
							</p>
							<div className="border-b-4 pb-10 w-48" />
							<div className="pt-4">
								<a
									target="_blank"
									rel="noreferrer"
									className="text-xl text-light hover:text-light "
									href="mailto:info@meetprateek.com"
								>
									info@meetprateek.com
								</a>
							</div>
							<div className="pt-4 flex">
								<a
									target="_blank"
									rel="noreferrer"
									href="mailto:info@meetprateek.com"
									className="mr-4 p-3 text-2xl bg-light hover:bg-primary text-main-dark rounded-full"
								>
									<IoIosMail />
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://github.com/prateekkarki/"
									className="mr-4 p-3 text-2xl bg-light hover:bg-primary text-main-dark rounded-full"
								>
									<ImGithub />
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://www.linkedin.com/in/prateekkarki/"
									className="text-2xl p-3 bg-light hover:bg-primary text-main-dark rounded-full"
								>
									<ImLinkedin2 />
								</a>
							</div>
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
