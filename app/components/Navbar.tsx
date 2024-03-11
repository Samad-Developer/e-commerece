'use client'
import { useState } from 'react';
import Link from "next/link";
import { BiSearch } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';

interface Category {
    name: string;
    path: string;
}

const Navbar = () => {
    const categories: Category[] = [
        { name: "electronics", path: "/electronics" },
        { name: "men's clothing", path: "/men's clothing" },
        { name: "women's clothing", path: "/women's clothing" },
        { name: "jewelery", path: "/jewelery" },
    ];

    return (
        <nav className="w-full h-16 md:h-20 lg:h-24 flex flex-wrap items-center justify-between bg-[#FFFCFA] px-8">
            {/* Logo or Brand */}
            <span className="text-lg md:text-xl lg:text-2xl font-semibold">Ecommerce</span>

            {/* Navigation Links */}
            <ul className={`md:flex items-center space-x-8 mt-4 md:mt-0 w-full md:w-auto`}>
                {categories.map((category, index) => (
                    <li key={index} className="text-sm md:text-base lg:text-lg">
                        <Link href={`${category.path}`}>
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Search Box */}
            <div className="relative flex items-center mt-4 md:mt-0">
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button className="px-4 py-2 text-[25px] rounded-r-md focus:outline-none">
                    <BiSearch />
                </button>
            </div>

            {/* Cart */}
            <div className="flex items-center mt-4 md:mt-0">
                <span className=" ml-2">Cart</span>
                <FaShoppingCart className="h-8 w-8 text-gray-600" />
            </div>
        </nav>
    )
}

export default Navbar;