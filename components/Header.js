// components/header.js

import Link from 'next/link';


const Header = () => {
  return (
    <header className="bg-white">
      <Link href="/" passHref>
        <div className="flex justify-center mx-auto py-4">
          <span className="text-xl font-bold tracking-tight ml-1">Rux</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
