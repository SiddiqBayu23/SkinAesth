import { FaBars, FaRegCalendar } from "react-icons/fa";
import './Navbar.css';

const NavbarComponent = ({ navbarIsOpen, handleOpenNavbar, handleOpenModal, loggedIn, handleLogout }) => (
    <nav className="navbar">
        <div className="custom-container">
            <div className="navbar__box">
                <div className="navbar__brand flex items-center gap-4">
                    <img src="https://i.ibb.co/4tnctDK/Logo-Skinaesth.png" alt="Navbar Icon" className='navbar__img' />
                    <p className='navbar__name'>SkinAesth</p>
                </div>
                <button className='navbar__button' onClick={handleOpenNavbar}>
                    <FaBars className='navbar__icon' />
                </button>
                <ul className={`navbar__menus ${navbarIsOpen === false ? "hidden" : "flex"}`}>
                    <li className='navbar__item'>
                        <a href="/" className='navbar__link'>Home</a>
                    </li>
                    <li className='navbar__item'>
                        <a href="/about" className='navbar__link'>About</a>
                    </li>
                    <li className='navbar__item'>
                        <a href="/categories" className='navbar__link'>Categories</a>
                    </li>
                    <li className='navbar__item'>
                        <a href="/blog" className='navbar__link'>Blog</a>
                    </li>
                    <li className='navbar__item'>
                        <a href="/subscribe" className='navbar__link'>Subscribe</a>
                    </li>
                    <li className='navbar__item'>
                        {loggedIn === false ? (
                            <button className='button button__with__icon button--primary' onClick={() => handleOpenModal('login')}>
                                <FaRegCalendar />
                                LOGIN
                            </button>
                        ) : (
                            <button className='button button__with__icon button--primary' onClick={handleLogout}>
                                <FaRegCalendar />
                                LOGOUT
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default NavbarComponent;