// components/header.js

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white flex justify-center">
      <Link href="/" passHref>
        <div className="xxs:hidden xs:hidden h-24 w-[26rem] bg-no-repeat bg-center block mt-1 bg-desktop bg-contain"></div>
        <div className="block bg-mobil bg-contain xxs:h-8 xs:h-8 w-72 bg-no-repeat bg-center s:hidden md:hidden: lg:hidden "></div>
      </Link>
    </header>
  );
};

export default Header;
