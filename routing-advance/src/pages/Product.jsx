import React from "react";
import { Link, Links, NavLink, Outlet } from "react-router-dom";

const Product = () => {
    return (
        <div>
            <div className="flex justify-center gap-10 font-bold py-4">
                <Link to='/product/men'>Men</Link>
                <Link to='/product/women'>Women</Link>
                <Link to='/product/kids'>Kids</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Product

