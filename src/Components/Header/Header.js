import React from 'react';
import style from "./Header.module.css";
import Logo from "../../Assets/Logo.png";
import profilePic from "../../Assets/Profile.png";


function Header() {

    return (
        <>
            <header>
                <div id={style.searchContainer}>
                    <img id={style.logo} src={Logo} alt='Logo' />
                    <div id={style.searchBox}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder='Search' />
                    </div>
                </div>
                <div id={style.navLinks}>
                    <div>
                        <span>
                            <i className="fa-solid fa-house"></i>
                            <p>Home</p>
                        </span>
                        <span>
                            <i className="fa-solid fa-users"></i>
                            <p>My Networks</p>
                        </span>
                        <span>
                            <i className="fa-solid fa-briefcase"></i>
                            <p>Jobs</p>
                        </span>
                        <span>
                            <i className="fa-solid fa-message"></i>
                            <p>Messaging</p>
                        </span>
                        <span>
                            <i className="fa-solid fa-bell"></i>
                            <p>Notifications</p>
                        </span>
                        <span>
                            <img src={profilePic} alt='profile-pic' />
                            <p>Me <i className="fa-solid fa-caret-down"></i></p>
                        </span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header