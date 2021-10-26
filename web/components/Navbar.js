import { navLinks } from '../utils/data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [pageTitle, setPageTitle] = useState('');
  const router = useRouter();

  useEffect(() => {
    const title = document.title;
    setPageTitle(title);
  }, [router]);

  return (
    <nav className="max-w-5xl mx-auto py-10 text-gray-800 dark:text-gray-200">
      <div className="flex justify-between items-baseline">
        <div className="text-4xl font-sans">{pageTitle}</div>

        {/* Nav Links */}
        <div className="flex">
          {navLinks.map(({ name, path }) => (
            <Link href={path} key={name}>
              <a className="pl-8">
                <p>{name}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="border-b border-gray-700 py-3" />
    </nav>
  );
}
