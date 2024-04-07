import Image from "next/image";
import Link from "next/link";

import { FaShoppingCart } from "react-icons/fa";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const products = await getData()
  return (
    <main className="mt-24 flex flex-col items-center justify-center min-h-screen p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 font-inter">
        {products.map((product: Product) => (
          <Link href={`/${product.category}/${product.id}`}>
          <div key={product.id} className="shadow-xl bg-white w-full sm:max-w-xs h-auto p-4">
            <div className="w-full h-40 relative flex items-center justify-center rounded-md overflow-hidden mb-4">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className=" flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold line-clamp-1 mt-8 mb-1">{product.title}</h2>
                <p className="text-gray-600 mb-6">{product.category}</p>
                <p className="text-gray-600 mb-6 line-clamp-3">{product.description}</p>
              </div>
              <p className="text-gray-600 mt-2 mb-6">price <span className='font-bold'>${product.price}</span></p>
                <button
                  className="flex items-center justify-center px-4 w-full py-3 bg-[#201e1e] text-white rounded-md shadow-md hover:bg-[#000000] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <p className="mr-2">Add to Cart</p>
                  <FaShoppingCart />
                </button>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
