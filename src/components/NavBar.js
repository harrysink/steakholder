/*import { useState } from "react";*/
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo-png.png';
import SignIn from "./SignIn";
import './NavBar.css';

export default function NavBar() {
    /*const [toggle, setToggle] = useState(false);*/
    const hamburger = <FontAwesomeIcon icon={faBars} />

    return (
        <nav className="navbar fixed-top">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler">{hamburger}</span>
            </button>
            <a className="navbar-brand" href="/">
                <img src={logo} alt="steakholder logo"/>
            </a>
                <a href="/signin">
                    <button className='sign-in'>Sign in</button>
                </a>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav mb-auto">
                    <a href='/signup'><li className="nav-item">Sign up</li></a>
                </ul>
                <p className="app-advert">App coming soon!</p>
            </div>
        </nav>
    )
}