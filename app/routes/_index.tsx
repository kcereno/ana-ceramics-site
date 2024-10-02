import type { MetaFunction } from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/react';
import NavBar from '~/components/NavBar';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export async function loader() {
  const result = await fetch('https://fakestoreapi.com/products');
  const data = (await result.json()) as Product[];
  console.log('loader ~ data:', data);

  return json({ products: data });
}

export default function Index() {
  const { products } = useLoaderData<typeof loader>();
  console.log('Index ~ products:', products);

  return (
    <div className="">
      <div className="flex flex-col mt-6 md:mt-4">
        <h1 className="text-center mb-8 text-5xl tracking-wider md:order-2 md:mt-12 md:text-7xl">
          ceramics
        </h1>
        <NavBar />
      </div>
      <main>
        {/* <div className="grid grid-cols-2 mt-10 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col"
            >
              <img
                src={'https://picsum.photos/400/'}
                alt=""
              />
              <div className="">{product.title}</div>
            </div>
          ))}
        </div> */}
      </main>
    </div>
  );
}
