/** @jsx jsx */
import { jsx } from '@emotion/core';
import { IoMdPin, IoIosCall, IoIosMail } from 'react-icons/io';

import TitleBlock from '../TitleBlock';
import ContactForm from './ContactForm';

function Contact() {
	return (
		<div>
			<TitleBlock title="Contact Me" subtitle="Send me a message" />
			<div className="bg-main-light">
				<div className="container mx-auto flex flex-col sm:flex-row">
					<div className="w-full sm:w-1/2  py-6 text-center">
						<div className="flex flex-col items-center">
							<IoMdPin className="text-primary text-xl" />
							<h3 className="font-bold text-primary">Address</h3>
							<p className="text-light">New Baneshwor,</p>
							<p className="text-light">Kathmandu, Nepal.</p>
						</div>
						<div className="flex flex-col items-center mt-6">
							<IoIosCall className="text-primary text-xl" />
							<h3 className="font-bold text-primary">Lets Talk</h3>
							<a className="text-light hover:text-primary" href="tel:+977984241xxxx">
								+977 984 241 XXXX
							</a>
						</div>
						<div className="flex flex-col items-center mt-6">
							<IoIosMail className="text-primary text-xl" />
							<h3 className="font-bold text-primary">Write to me</h3>
							<a
								className="text-light hover:text-primary"
								href="mailto:info@meetprateek.com"
							>
								info@meetprateek.com
							</a>
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
