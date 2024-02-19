import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white flex justify-center">
      <Link href="/portfolio" passHref>
        <div className="flex justify-center mx-auto py-4">
          <span className="text-xl font-bold tracking-tight ml-1">
            Portfolio
          </span>
        </div>
      </Link>
      <Link href="/sketchbook" passHref>
        <div className="flex justify-center mx-auto py-4">
          <span className="text-xl font-bold tracking-tight ml-1">
            Sketchbook
          </span>
        </div>
      </Link>
      <Link href="https://www.instagram.com/chocolatechiphelmet/" target="_blank" passHref>
        <div className="flex justify-center mx-auto py-4">
          <span className="text-xl font-bold tracking-tight ml-1">
            Instagram
          </span>
        </div>
      </Link>
      <Link href="/contact" passHref>
        <div className="flex justify-center mx-auto py-4">
          <span className="text-xl font-bold tracking-tight ml-1">Contact</span>
        </div>
      </Link>
    </div>
  );
}
