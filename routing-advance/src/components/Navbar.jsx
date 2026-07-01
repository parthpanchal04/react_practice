import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex bg-gray-800 items-center px-8 py-4 justify-between">
            <h2 className="text-2xl font-bold">Lalala</h2>
            <div className="flex gap-8">
                <Link  className="text-lg font-bold" to='/'>Home</Link>
                <Link  className="text-lg font-bold" to='/about'>About</Link>
                <Link  className="text-lg font-bold" to='/product'>Product</Link>
                <Link  className="text-lg font-bold" to='/contact'>Contact</Link>
                <Link  className="text-lg font-bold" to='/cources'>Cources</Link>

            </div>
        </div>
    )
}


export default Navbar

