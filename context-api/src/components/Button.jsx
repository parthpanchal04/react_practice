import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";



const Button = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)

    const changeTheme = () => {
        setTheme('Dark')
        
    }

    return (
        <div>
            <button onClick={changeTheme} className="btn">Click to change theme to {theme}</button>
        </div>
    )
}

export default Button 