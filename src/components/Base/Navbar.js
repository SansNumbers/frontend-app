import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import Cookies from 'js-cookie';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className="Navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                        Pink + White <i className="fas fa-dove"></i>
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        {Cookies.get('token') != null &&
                        (<li className='nav-item'>
                            <Link to='/myProfile' className='nav-links' onClick={closeMobileMenu}>
                            My Profile
                            </Link>
                        </li>
                        )}

                        <li className='nav-item'>
                            <Link to='/posts' className='nav-links' onClick={closeMobileMenu}>
                                Posts
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/categories' className='nav-links' onClick={closeMobileMenu}>
                                Categories
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/users' className='nav-links' onClick={closeMobileMenu}>
                                Users
                            </Link> 
                        </li>
                    </ul>

                    {Cookies.get('token') == null &&
                    (<Link to={"/login"}>
                        Login
                    </Link>)
                    ||
                    (<Link to={"/logout"}>
                        Logout
                    </Link>)
                    }

                </div>
            </nav>
        </div>
    )
}

export default Navbar
