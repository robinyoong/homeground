import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg px-4 text-gray-900 dark:text-gray-200 font-inter">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
