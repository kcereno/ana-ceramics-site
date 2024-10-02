import { Link } from '@remix-run/react';

function NavBar() {
  return (
    <nav className="flex gap-8 justify-center uppercase underline md:no-underline">
      <Link to={''}>Products</Link>
      <Link
        className="hidden md:block"
        to={''}
      >
        About
      </Link>
      <Link
        className="hidden md:block"
        to={''}
      >
        FAQ
      </Link>
      <Link to={''}>Contact</Link>
      <Link to={''}>Cart</Link>
    </nav>
  );
}

export default NavBar;
