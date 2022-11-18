import React, { useState } from 'react';

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className='container-fluid'>
                <a className="navbar-brand d-flex" href="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/1820/1820878.png" alt="Logo" width="50" height="50" className="rounded" />
                    {/* <h2 className='mt-2'>&nbsp;Posto!</h2> */}
                </a>
                <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">

                    <form class="d-flex me-auto mb-2 mb-lg-0 text-center">
                        <input class="form-control me-2" type="search" placeholder="# Explore" size="15" aria-label="Search" />
                    </form>

                    <ul class="d-flex navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#link1"><i class="fa-solid fa-house-user"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#link2"><i class="fa-solid fa-hashtag"></i></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#link3"><i class="fa-solid fa-arrow-trend-up"></i></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#link4"><i class="fa-solid fa-user"></i></a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;