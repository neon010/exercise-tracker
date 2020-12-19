import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand-logo">
                <Link to="/" className="navbar-brand">ExcerTracker</Link>
            </div>
            <div className="table">
                <ul id="horizontal-list">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Exercises</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Exercise Log</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/user" className="nav-link">Create User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar