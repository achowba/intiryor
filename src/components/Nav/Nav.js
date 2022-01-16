import logo from '../../assets/img/logo.png';
import iconSearch from '../../assets/img/icon-search.svg';

import './Nav.css';

const Nav = () => {
    return (
        <div className="nav-wrapper">
            <div className="brand">
                <img src={logo} alt="Logo" />
            </div>
            <p className="nav-text">Latest blog articles</p>
            <div className="search-wrapper">
                <input type="text" className='input-search' placeholder='Search the keyword'/>
                <button className='btn-search'>
                    <img src={iconSearch} alt="Logo" />
                </button>
            </div>
        </div>
    )
}

export default Nav;
