import logger from '@/lib/logger';
import { NextPage } from 'next';


const AboutPage: NextPage = () => {
  logger.info('About page rendered');
  return <h1>About Us</h1>;
};

export default AboutPage;
