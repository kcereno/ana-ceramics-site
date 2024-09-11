import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="p-6">
      <h1 className="text-center text-5xl tracking-wider">ceramics </h1>
      <nav className="flex mt-10 gap-8 justify-center uppercase underline">
        <Link to={''}>Products</Link>
        <Link to={''}>Contact</Link>
        <Link to={''}>Cart</Link>
      </nav>
      <main></main>
    </div>
  );
}
