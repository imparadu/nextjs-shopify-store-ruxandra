import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="text-center sticky top-0 w-full h-full z-50 mt-2 p-0 overflow-hidden bg-white">
      <ul className="p-0 mt-1.5 list-none inline-flex">
        <li className="px-3 items-center xs:text-1rem">
          <Link
            href="/portfolio"
            className="text-17rem xxs:text-08rem xs:text-1rem hover:text-albastru transition duration-200 ease-in-out"
          >
            Portfolio
          </Link>
        </li>
        <li className="px-3 items-center xxs:px-1 xs:text-1rem hover:text-albastru transition duration-500 ease-in-out">
          <Link
            href="/sketchbook"
            className="text-17rem xxs:text-08rem xs:text-1rem"
          >
            Sketchbook
          </Link>
        </li>
        <li className="px-3 items-center xxs:px-1 xs:text-1rem hover:text-albastru transition duration-500 ease-in-out">
          <a
            href="https://www.instagram.com/chocolatechiphelmet/ "
            target="blank"
            className="text-17rem xxs:text-08rem xs:text-1rem"
          >
            Instagram
          </a>
        </li>
        <li className="px-3 items-center xxs:px-1 xs:text-1rem hover:text-albastru transition duration-500 ease-in-out">
          <Link
            href="/contact"
            className="xxs:text-08rem xs:text-1rem text-17rem"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
