import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navigation">
      <ul className="p-0 mt-1.5 list-none inline-flex">
        <li className="px-3 items-center">
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className="px-3 items-center">
          <Link href="/sketchbook">Sketchbook</Link>
        </li>
        <li className="px-3 items-center">
          <a
            href="https://www.instagram.com/chocolatechiphelmet/ "
            target="blank"
            className="text-17rem"
          >
            Instagram
          </a>
        </li>
        <li className="px-3 items-center">
          <Link href="/contact">Contact</Link>
          {/*   font-size: 1.7rem;
  color: black; */}
        </li>
      </ul>
    </div>
  );
}
