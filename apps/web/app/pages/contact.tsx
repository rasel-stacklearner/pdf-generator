import logger from '@/lib/logger';
import { NextPage } from 'next';

const ContactPage: NextPage = () => {
  logger.info('Contact page rendered');
  return <h1>Contact Us</h1>;
};

export default ContactPage;
