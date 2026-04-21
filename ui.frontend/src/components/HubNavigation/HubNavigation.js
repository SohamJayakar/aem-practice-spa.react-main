import { MapTo } from '@adobe/aem-react-editable-components';
import React, { Component } from 'react';

require('./HubNavigation.css');

const HubNavigationEditConfig = {
    emptyLabel: 'Hub Navigation',
    isEmpty: () => false
};

class HubNavigation extends Component {
    render() {
        const { text } = this.props;

        return (
            <nav className="hub-navigation">
                <ul className="hub-nav-list">
                    {/* ✅ Hub Home comes from dialog */}
                    <li>
                        <a href="/hub">
                            {text}
                        </a>
                    </li>

                    {/* ✅ Rest are hard‑coded */}
                    <li><a href="/hub/internet">Internet</a></li>
                    <li><a href="/hub/entertainment">Entertainment</a></li>
                    <li><a href="/hub/free-tv-movies">Free TV &amp; Movies</a></li>
                    <li><a href="/hub/mobile">Mobile</a></li>
                    <li><a href="/hub/smart-home">Smart Home</a></li>
                </ul>
            </nav>
        );
    }
}

MapTo('wknd-spa-react/components/hub-navigation')(HubNavigation, HubNavigationEditConfig);

export default HubNavigation;