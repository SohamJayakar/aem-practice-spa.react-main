import { MapTo } from '@adobe/aem-react-editable-components';
import React, { Component } from 'react';

require('./Header.css');

/**
 * Edit configuration for Header component
 */
const HeaderEditConfig = {
    emptyLabel: 'Header',
    isEmpty: function() {
        return false;
    }
};

/**
 * Header component with navigation
 */
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
                    {/* Logo Section */}
                    <div className="header-logo">
                        <svg width="100" height="40" viewBox="0 0 150 60" fill="none">
                            <text x="10" y="35" fontSize="24" fontWeight="bold" fill="#231F20">Xfinity</text>
                        </svg>
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

                    {/* Navigation Menu */}
                    <nav className={`header-nav ${this.state.mobileMenuOpen ? 'active' : ''}`}>
                        <ul className="nav-menu">
                            <li><a href="/hub" title="Hub Home">Hub Home</a></li>
                            <li><a href="/hub/internet" title="Internet">Internet</a></li>
                            <li><a href="/hub/tv-video" title="Entertainment">Entertainment</a></li>
                            <li><a href="/hub/free-tv-movies" title="Free TV & Movies">Free TV & Movies</a></li>
                            <li><a href="/hub/mobile" title="Mobile">Mobile</a></li>
                            <li><a href="/hub/smart-home" title="Smart Home">Smart Home</a></li>
                        </ul>
                    </nav>

                    {/* Right Actions */}
                    <div className="header-actions">
                        <div className="search-bar">
                            <input type="text" placeholder="Search..." aria-label="Search" />
                            <button aria-label="Submit search">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </div>
                        <button className="sign-in-btn" aria-label="Sign In">Sign In</button>
                    </div>
                </div>
            </header>
        );
    }
}

MapTo('wknd-spa-react/components/header')(Header, HeaderEditConfig);

export default Header;
