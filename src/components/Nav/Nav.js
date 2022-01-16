import gsap, { Power4 } from 'gsap';
import { useRef, useEffect } from 'react';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

import logo from '../../assets/img/logo.png';
import iconSearch from '../../assets/img/icon-search.svg';

import './Nav.css';

const Nav = () => {
    gsap.registerPlugin(CSSRulePlugin, CSSRulePlugin);
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    let navWrapperRef = useRef(null);

    useEffect(() => {
        const navWrapperOverlay = CSSRulePlugin.getRule(`.nav-wrapper::before`);

        // use useRef hooks to select html elements
        tl.from(navWrapperRef, { duration: 1, y: 20, ease: Power4.easeInOut })
            .to(navWrapperOverlay, { duration: 0.5, cssRule: { scaleY: 0 } }, .2)

    }, [tl]);

    return (
        <div className="nav-wrapper" ref={el => navWrapperRef = el}>
            <div className="brand">
                <img src={logo} alt="Logo" />
            </div>
            <p className="nav-text">Latest blog articles</p>
            <div className="search-wrapper">
                <input type="text" className='input-search' placeholder='Search the keyword' />
                <button className='btn-search'>
                    <img src={iconSearch} alt="Logo" />
                </button>
            </div>
        </div>
    )
}

export default Nav;
