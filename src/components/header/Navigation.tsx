import React from 'react';
// import { Navbar, Nav } from 'rsuite';
import { Link } from 'react-router-dom'

const Navigate = () => {
    // const [isNavOpen, setNavTab] = React.useState<boolean>(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
                <div className="collapse navbar-collapse container">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item mr-3">
                            <Link to="/email" className="nav-link">Most Emailed</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/share" className="nav-link">Most Shared</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/view" className="nav-link">Most Viewed</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigate;