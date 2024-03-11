'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Home() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className="mt-24 flex flex-col items-center justify-center min-h-screen p-6">
      <div className="grid grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-md p-4">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
            />
            <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
      <Link href="/dashboard?search=my-project">Click me</Link>
    </main>
  );
}
