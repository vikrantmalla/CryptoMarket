import React from 'react'
import { NavLink } from 'react-router-dom';
const BackButton = () => {
    return (
        <NavLink to="/" className="backBtn-cointaner">
            <button className="back-btn">
                Go Back
            </button>
        </NavLink>
    )
}

export default BackButton