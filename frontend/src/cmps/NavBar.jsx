import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {

    const [menuIsOpen, toggleMenu] = useState(false);
    const [loginWindowIsOpen, toggleLogin] = useState(false);

    return (
        <nav>
            <div className="announcement-bar">
                ONLY TODAY : 25% OFF EVERYTHING + FREE SHIPPING! Code applied at checkout
            </div>
            <div className="main-nav">
                <button className="menu-btn-mobile" onClick={() => { toggleMenu(!menuIsOpen) }}><i className={menuIsOpen ? "fa fa-close" : "fa fa-align-justify"} style={{ fontSize: "20px" }}></i></button>
                <div id="menu" className="left-nav-web">
                    <Link to='/home' ><span className="link">home</span></Link>
                    <Link to='/bags' ><span className="link">shop</span></Link>
                    <Link to='/wishList' ><span className="link">Wish List</span></Link>
                    <Link to='/contactus'><span className="link">Contact Us</span></Link>
                </div>
                <div className="right-nav">
                    <Link to='/shoppingcart'><i className="fa fa-shopping-cart"></i></Link>
                    <Link to='/login'><i className= "fa fa-user-circle" style={{ fontSize: "20px" }}></i></Link>

                </div>
            </div>

            <div id="menu" className={menuIsOpen ? "left-nav open" : "left-nav"}>
                <Link to='/' onClick={() => { toggleMenu(!menuIsOpen) }} ><span className="link">home</span></Link>
                <Link to='/bags' onClick={() => { toggleMenu(!menuIsOpen) }}><span className="link">shop</span></Link>
                <Link to='/wishList' onClick={() => { toggleMenu(!menuIsOpen) }}><span className="link">Wish List</span></Link>
                <Link to='/contactus' onClick={() => { toggleMenu(!menuIsOpen) }}><span className="link">Contact Us</span></Link>
            </div>





        </nav >
    )
}