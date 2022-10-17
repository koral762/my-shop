import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {

    const [menuIsOpen, toggleMenu] = useState(false);

    const onToggleMenu = () => { toggleMenu(!menuIsOpen) }

    return (
        <nav>
            <div className="main-nav">
                <button className="menu-btn-mobile" onClick={() => { onToggleMenu() }}><i className={menuIsOpen ? "fa fa-close" :"fa fa-align-justify"} style={{ fontSize: "20px" }}></i></button>
            <div id="menu" className="left-nav-web">
                <Link to='/home' ><span className="link">home</span></Link>
                <Link to='/bags' ><span className="link">shop</span></Link>
                <Link to='/wishList' ><span className="link">Wish List</span></Link>
                <Link to='/contactus'><span className="link">Contact Us</span></Link>
            </div>
                <div className="right-nav">
                    <Link to='/shoppingcart'><i className="fa fa-shopping-cart"></i></Link>
                </div>
            </div>

            <div id="menu" className={menuIsOpen ? "left-nav open" : "left-nav"}>
                <Link to='/' onClick={() => { onToggleMenu() }} ><span className="link">home</span></Link>
                <Link to='/bags' onClick={() => { onToggleMenu() }}><span className="link">shop</span></Link>
                <Link to='/wishList' onClick={() => { onToggleMenu() }}><span className="link">Wish List</span></Link>
                <Link to='/contactus' onClick={() => { onToggleMenu() }}><span className="link">Contact Us</span></Link>
            </div>





        </nav>
    )
}