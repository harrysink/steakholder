/*import { useState } from "react";*/
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo-png.png';
import './NavBar.css';

function NavBar() {
    /*const [toggle, setToggle] = useState(false);*/
    const hamburger = <FontAwesomeIcon icon={faBars} />

    return (
        <nav className="navbar fixed-top">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler">{hamburger}</span>
            </button>

            {/*<link to="/" className="navbar-brand"><img src={logo} alt="steakholder logo"/></link>*/}
            <a className="navbar-brand" href="steakholder.html">
                <img src={logo} alt="steakholder logo"/>
            </a>
            {/*<link to="/sign-in" className="sign-in">Sign in</link>*/}
            <a href="sign-in.html" className="sign-in">
                <div>Sign in</div>
            </a>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav mb-auto">
                    {/*<link to="/sign-in" className="nav-item">Sign-in</link>*/}
                    {/*<link to="/sign-up" className="nav-item">Sign-up</link>*/}
                    {/*<link to="/my-profile" className="nav-item">My profile</link>*/}
                </ul>
                <div>{logo} App coming soon!</div>
            </div>
        </nav>
        /*<Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/my-profile" element={<ProfilePage/>}/>
        </Routes>*/
    )
}

export default NavBar;