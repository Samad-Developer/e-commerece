import Link from "next/link";
import Image from 'next/image'
import { BiSearch } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import { FaEllipsisV } from 'react-icons/fa';
import image from '../../public/next.svg'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


interface Category {
    name: string;
    path: string;
}

const Navbar = () => {
    const categories: Category[] = [
        { name: "Electronics", path: "/electronics" },
        { name: "Men's clothing", path: "/men's clothing" },
        { name: "Women's clothing", path: "/women's clothing" },
        { name: "Jewelery", path: "/jewelery" },
    ];
    return (
        <nav className="w-full h-16 md:h-20 lg:h-24 flex flex-wrap items-center justify-between bg-[#FFFCFA] px-8">
            {/* Logo or Brand */}
            <Image src={image} alt="Logo" width={100} height={100} />
            {/* Navigation Links */}
            <ul className={`hidden xl:flex items-center space-x-8 mt-4 md:mt-0 w-full md:w-auto`}>
                {categories.map((category, index) => (
                    <li key={index} className="text-sm md:text-base lg:text-lg">
                        <Link href={`${category.path}`}>
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Search Box */}
            <div className="hidden xl:flex items-center mt-4 md:mt-0">
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
            <div className="hidden xl:flex items-center mt-4 md:mt-0">
                <FaShoppingCart className="h-8 w-8 text-gray-600" />
            </div>
            {/* mobile menu */}
            <Popover>
                <PopoverTrigger><FaEllipsisV className="xl:hidden h-6 w-6 text-gray-600" /></PopoverTrigger>
                <PopoverContent>
                    <div className="flex justify-end"><FaShoppingCart className="h-8 w-8 text-gray-600" /></div>
                    {/* menu links */}
                    <ul className={`flex-col items-center mt-4`}>
                        {categories.map((category, index) => (
                            <li key={index} className="text-sm md:text-base lg:text-lg">
                                <Link href={`${category.path}`}>
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* search box */}
                    <div className="flex mt-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className=" rounded-l-md focus:outline-none"
                        />
                        <button className=" rounded-r-md focus:outline-none">
                            <BiSearch />
                        </button>
                    </div>
                </PopoverContent>
            </Popover>
        </nav>
    );
}

export default Navbar;