// components/header.js

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white flex justify-center">
      <Link href="/" passHref>
        <div className="logoDesktop"></div>
        <div className="logoMobil"></div>
      </Link>
    </header>
  );
};

export default Header;
