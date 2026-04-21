import { MapTo } from '@adobe/aem-react-editable-components';
import React, { Component } from 'react';

require('./Footer.css');

/**
 * Edit configuration for Footer component
 */
const FooterEditConfig = {
    emptyLabel: 'Footer',
    isEmpty: function() {
        return false;
    }
};

/**
 * Footer component
 */
class Footer extends Component {
    render() {
        const {
            companyName,
            copyrightYear
        } = this.props;

        const currentYear = copyrightYear || new Date().getFullYear();
        const company = companyName || 'Comcast';

        return (
            <footer className="xfinity-footer">
                <div className="footer-container">
                    {/* Main Footer Content */}
                    <div className="footer-content">
                        {/* About & Services */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Company</h4>
                            <ul className="footer-links">
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/careers">Careers</a></li>
                                <li><a href="/news">News & Press</a></li>
                                <li><a href="/investors">Investors</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Services & Support</h4>
                            <ul className="footer-links">
                                <li><a href="/support">Customer Support</a></li>
                                <li><a href="/status">Service Status</a></li>
                                <li><a href="/billing">Billing & Payments</a></li>
                                <li><a href="/store">Xfinity Store</a></li>
                            </ul>
                        </div>

                        {/* Policies */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Policies & Legal</h4>
                            <ul className="footer-links">
                                <li><a href="/terms">Web Terms of Service</a></li>
                                <li><a href="/privacy">Privacy Policy</a></li>
                                <li><a href="/privacy-choices">Your Privacy Choices</a></li>
                                <li><a href="/ad-choices">Ad Choices</a></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Follow Us</h4>
                            <div className="footer-social">
                                <a href="https://twitter.com/XFINITY" target="_blank" rel="noopener noreferrer" title="Twitter" aria-label="Twitter">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 0 11-4s1-1 1-1z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/xfinity" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/user/xfinity" target="_blank" rel="noopener noreferrer" title="YouTube" aria-label="YouTube">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.54c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33zM9.75 15.02v-6.2l5.85 3.1-5.85 3.1z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Language Selector */}
                    <div className="footer-language">
                        <button className="language-toggle" aria-label="Select language">
                            English
                        </button>
                        <span className="language-separator">|</span>
                        <button className="language-toggle" aria-label="Español">
                            Español
                        </button>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} {company}. All rights reserved.
                    </p>
                </div>
            </footer>
        );
    }
}

MapTo('wknd-spa-react/components/footer')(Footer, FooterEditConfig);

export default Footer;
