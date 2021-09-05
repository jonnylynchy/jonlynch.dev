import {
    useLocation,
    Link
} from "react-router-dom";

import logo from '../images/dev-tech-logo.svg';

export function Nav() {
    const { pathname } = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand d-flex align-items-center">
                    <img src={ logo } alt="dev tech logo" className="logo-nav" />
                    <h4 className="m-2">Jon Lynch</h4>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={ `nav-link ${pathname === '/about' ? 'active' : ''}` } aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={ `nav-link ${pathname === '/work' ? 'active' : ''}` } to="/work">Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={ `nav-link ${pathname === '/connect' ? 'active' : ''}` } to="/connect">Connect</Link>
                        </li>
                    </ul>
                    {/* 
                        <span className="navbar-text">
                            Navbar text with an inline element
                        </span>
                    */}
                </div>
            </div>
        </nav>
    );
}
