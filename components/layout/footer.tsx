import { siteConfig } from '@/config/site';
import useDate from '@/hooks/use-date';

interface FooterProps {}

const { title, creator } = siteConfig;

const Footer = () => {
  const { year, wish } = useDate();
  return (
    <footer
      className={`font-semibold border-t flex py-4 items-center justify-between px-4 md:px-5 lg:px-6 text-center text-xs`}
    >
      <p>
        &#169; {+year + ` ${creator.name} • ${title} • All Rights Reserved`}
      </p>
      <p className='hidden lg:flex'>{wish}</p>
    </footer>
  );
};

export default Footer;
