// components/footer.js
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <footer className="py-2 border-t border-albastru flex justify-between mx-10">
      <div>
        <a
          href="https://www.instagram.com/chocolatechiphelmet/ "
          target="blank"
        >
          <InstagramIcon
            sx={{
              fontSize: 30,
              color: '#6fbbcd',
              stroke: '#ffffff',
              strokeWidth: 1,
            }}
          />
        </a>
        <Link href="/contact">
          <MailOutlineIcon
            sx={{
              fontSize: 30,
              color: '#6fbbcd',
              stroke: '#ffffff',
              strokeWidth: 1,
            }}
          />
        </Link>
      </div>
      <div className="text-right align-top">
        <p className="text-albastru font-[400]">
          Ruxandra Serbanoiu
          <span>
            <CopyrightIcon
              sx={{
                fontSize: 20,
                color: '#6fbbcd',
                stroke: '#ffffff',
                strokeWidth: 0.7,
                marginBottom: '5px',
                marginLeft: '5px',
              }}
            />
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
