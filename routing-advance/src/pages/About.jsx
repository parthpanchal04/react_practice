import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";

const About = () => {

    const navigate = useNavigate()
   

    return (
        <div>
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
            <h1>About Page</h1>
        </div>
    )
}


export default About

