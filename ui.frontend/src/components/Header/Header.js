import { MapTo } from '@adobe/aem-react-editable-components';
import React, { Component } from 'react';

require('./Header.css');

const HeaderEditConfig = {
    emptyLabel: 'Header',
    isEmpty: () => false
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenuOpen: false
        };
    }

    toggleMobileMenu = () => {
        this.setState(prev => ({
            mobileMenuOpen: !prev.mobileMenuOpen
        }));
    }

    render() {
        return (
            <header className="xfinity-header">
                <div className="header-container">

                    {/* Logo */}
                    <div className="header-logo">
                        <a href="/" aria-label="Home">
                            <img
                                src={this.props.logoImage}
                                alt={this.props.logoAlt}
                                className="header-logo-image"
                            />
                        </a>
                    </div>



                    {/* Mobile Menu Toggle */}
                    <button 
                        className="mobile-menu-toggle" 
                        onClick={this.toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Primary Navigation */}
                    <nav className={`header-nav ${this.state.mobileMenuOpen ? 'active' : ''}`}>
                        <ul className="nav-menu">
                            <li><a href="/internet">Internet</a></li>
                            <li><a href="/mobile">Mobile</a></li>
                            <li><a href="/tv-video">TV & Streaming</a></li>
                            <li><a href="/home-solutions">Home Solutions</a></li>
                            <li><a href="/home-phone">Home Phone</a></li>
                            <li><a href="/build-your-plan">Build Your Plan</a></li>
                            <li><a href="/membership">Membership Benefits</a></li>
                        </ul>
                    </nav>

                    {/* Right Actions */}
                    <div className="header-actions">
                        <button className="icon-btn" aria-label="Search">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                        <button className="icon-btn" aria-label="Location">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                        </button>
                        <button className="icon-btn" aria-label="Support">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                            </svg>
                        </button>
                        <button className="icon-btn" aria-label="Cart">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                            </svg>
                        </button>

                        <a href="/signin" className="sign-in-btn">Sign In</a>
                    </div>

                </div>
            </header>
        );
    }
}

MapTo('wknd-spa-react/components/header')(Header, HeaderEditConfig);

export default Header;