
'use client'
import { useParams } from 'next/navigation'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from 'react-icons/fa';

const Page = () => {
  interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
  }
  const params = useParams<{ category: string }>()
  const category = params.category;
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className="mt-10 flex flex-col items-center justify-center min-h-screen p-6">
      <div className="grid grid-cols-4 gap-4 font-inter">
        {products.map((product) => (
          <div key={product.id} className="shadow-xl bg-[#FFFFFF] w-[302px] h-[520px] p-4">
            <div className="w-40 h-40 relative rounded-md overflow-hidden">
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
                className="flex justify-center px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Add to Cart
                <FaShoppingCart className="ml-2" />
              </button></div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Page;
