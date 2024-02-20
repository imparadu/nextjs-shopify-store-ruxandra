import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/sketchbook">Sketchbook</Link>
        </li>
        <li>
          <a
            href="https://www.instagram.com/chocolatechiphelmet/ "
            target="blank"
          >
            Instagram
          </a>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
