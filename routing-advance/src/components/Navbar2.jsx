import React from "react";
import { useNavigate } from "react-router-dom";


const Navbar2 = () => {

    const navigate = useNavigate()

    return (
        <div className="px-5 py-2 bg-gray-600">
            <button 
                onClick={() => {
                    navigate('/')
                }} 
                className="bg-amber-400 px-5 py-2 m-6 text-black rounded cursor-pointer active:scale-95">
                Back to Home Page
            </button>
            <button 
                onClick={() => {
                    navigate(-1)
                }} 
                className="bg-amber-400 px-5 py-2 m-6 text-black rounded cursor-pointer active:scale-95">
                Back
            </button>
            <button 
                onClick={() => {
                    navigate(+1)
                }} 
                className="bg-amber-400 px-5 py-2 m-6 text-black rounded cursor-pointer active:scale-95">
                Next
            </button>
        </div>
    )
}

export default Navbar2

