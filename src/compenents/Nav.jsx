import React from "react";
import Logo from "../assets/images/logo.svg";
import Serach from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

function Nav() {
    return (<nav className="nav-wrapper">
        <div className="nav-content">
            <ul className="list-styled">
                <li><img src={Logo} alt="Apple" /></li>
                <li ><a className="link-styled">Store</a></li>
                <li ><a className="link-styled">Mac</a></li>
                <li ><a className="link-styled">IPad</a></li>
                <li ><a className="link-styled">watch</a></li>
                <li ><a className="link-styled">AirPods</a></li>
                <li ><a className="link-styled">TV & Home</a></li>
                <li ><a className="link-styled">Entertaiment</a></li>
                <li ><a className="link-styled">Accessories</a></li>
                <li ><a className="link-styled">Support</a></li>
                <li><a><img src={Serach} alt="Serach" /></a></li>
                <li><a><img src={Store} alt="Store"/></a></li>
            </ul>
        </div>
    </nav>);
}

export default Nav;
