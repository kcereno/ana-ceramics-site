import { Link } from '@remix-run/react';

const navLinks = [
  { label: 'Products', href: '/', hiddenOnMobile: false },
  { label: 'About', href: '/', hiddenOnMobile: true },
  { label: 'FAQ', href: '/', hiddenOnMobile: true },
  { label: 'Contact', href: '/', hiddenOnMobile: false },
  { label: 'Cart', href: '/', hiddenOnMobile: false },
];

function NavBar() {
  return (
    <nav className="flex gap-8 justify-center uppercase underline md:no-underline ">
      {navLinks.map((navLink) => (
        <Link
          key={navLink.label}
          to={navLink.href}
          className={`hover:text-red-500 transition-colors duration-300 ${
            navLink.hiddenOnMobile ? 'hidden md:block' : ''
          }`}
        >
          {navLink.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
