import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../../images/logo.png';
import user_icon from '../../images/user_icon.png';
import search_icon from '../../images/search_icon.png';
import box_icon from '../../images/box_icon.png';
const menuItems = ["What to cook", "Recipes", "Ingredients", "Occasions", "About Us"];

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
            <div className="container-fluid">
                {/* Logo */}
                <a className="navbar-brand text-danger fw-bold d-flex align-items-center" href="#" style={{fontSize: "25px"}}>
                    <img src={logo} alt="" style={{ height: "50px", width: "50px" }}/>
                    <span ></span> Chefify
                </a>

                {/* Thanh tìm kiếm */}
                <form className="d-none d-md-flex me-auto">
                    <span><img src={search_icon} style={{ width: "40px", height: "40px", marginLeft: "40px",marginTop: "5px" }}/></span>
                    <input
                        className="form-control rounded-pill px-4"
                        type="search"
                        placeholder="What would you like to cook?"
                    />
                </form>

                {/* Toggle Button (Mobile) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu Items */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        {menuItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <a className="nav-link" href="#">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Recipe Box & Avatar */}
                <div className="d-flex align-items-center">
                    <span><img src={box_icon} alt="" style={{ width: "40px", height: "40px" }}/></span>
                    <button className="btn btn-outline-danger rounded-pill me-3">
                        Your Recipe Box
                    </button>
                    <img src={user_icon} alt="" style={{ width: "50px", height: "50px" }}/>
                </div>
            </div>
        </nav>
    );
}
