import { socialMediaLinks } from '../utils/socialMedia';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-5xl mx-auto border-t border-gray-700 py-8 my-8 flex justify-between text-sm text-gray-800 dark:text-gray-500">
      <p>Robin Yoong © {year}</p>
      <div className="flex ">
        {socialMediaLinks.map(({ name, link }) => (
          <a target="_blank" rel="noopener noreferrer" href={link}>
            <p className="ml-2 hover:text-gray-500 dark:hover:text-white">
              {name}
            </p>
          </a>
        ))}
      </div>
    </footer>
  );
}
