import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from '../../img/logo.png';

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };
    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu;
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            // closeMenu;
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div className="img">
                <img src={logo} alt="logo" />
                <a href="" className={`nav_hamburger ${navActive? "active": ""}`} onClick={toggleNav}>

                    <span className="nav_hamburger_line"></span>
                    <span className="nav_hamburger_line"></span>
                    <span className="nav_hamburger_line"></span>
                    <span className="nav_hamburger_line"></span>
                    <span className="nav_hamburger_line"></span>
                </a>
            </div>
            <div className={`navbar--items ${navActive? "active": ""}`}>
                <ul>
                    <li>
                        {/* className={(navData) => (navData.isActive ? "active-style" : 'none')} */}
                        <Link onClick={closeMenu} activeclass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="heroSection" className="navbar--content">Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeclass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="MyPortfolio" className="navbar--content">Portfolio</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeclass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="navbar--content">About Me</Link>
                    </li>

                    <li>
                        <Link onClick={closeMenu} activeclass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="Testimonials" className="navbar--content">Testimonials</Link>
                    </li>

                </ul>
            </div>

                        <Link onClick={closeMenu} activeclass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="ContactMe" className="btn btn-outline-primary">Contact Me</Link>

        </nav>
    );
}

export default Navbar;
