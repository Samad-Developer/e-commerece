'use client'
import { useParams } from 'next/navigation'
import Image from "next/image";


async function getData(productNumber: string | string[]) {
  const res = await fetch(`https://fakestoreapi.com/products/${productNumber}`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const page = async () => {
  const { productDetails } = useParams();
  const product = await getData(productDetails)
  return (
    <div className='flex flex-col md:flex-row mx-52 mt-6'>
      <div>
        <Image 
          width={600}
          height={600}
          src={product.image}
          alt={product.title}
          className='object-contain object-center' />
      </div>
      <div className='pl-10 '>
        <h5 className='font-bold text-base'>{product.title}</h5>
        <p className='mt-3 text-gray-400 font-bold'>Category</p>
        <p className='font-bold'>{product.category}</p>
        <p className='font-bold mt-5 text-gray-400'>Description</p>
        <p className='text-base'>{product.description}</p>
        <p className='font-bold mt-5 text-gray-400'>Price</p>
        <p className='font-bold text-xl'>${product.price}</p>
        <button className="mt-5 flex items-center justify-center px-4 w-full py-3 bg-[#201e1e] text-white rounded-md shadow-md hover:bg-[#000000] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default page