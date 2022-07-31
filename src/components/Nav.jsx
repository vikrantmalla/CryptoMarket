import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import '../styles/Nav.css'

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navigation">
            <NavLink className="brand-name" to="/">CryptoMarket</NavLink>

            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                <AiOutlineMenu />
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <NavLink to="/">Crypto</NavLink>
                    </li>
                    <li>
                        <NavLink to="/watchlist">WatchList</NavLink>
                    </li>
                    <li>
                        <NavLink to="/exchange">Exchange</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


