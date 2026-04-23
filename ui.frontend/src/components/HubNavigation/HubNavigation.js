import { MapTo } from '@adobe/aem-react-editable-components';
import React, { Component } from 'react';

require('./HubNavigation.css');

const HubNavigationEditConfig = {
    emptyLabel: 'Hub Navigation',
    isEmpty: () => false
};

class HubNavigation extends Component {
    render() {
        const { navItems } = this.props;
        const items = navItems || [];

        return (
            <nav className="hub-navigation">
                <ul className="hub-nav-list">
                    {/* Navigation items from dialog */}
                    {items.map((item, index) => (
                        <li key={index}>
                            <a href={item.link}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

MapTo('wknd-spa-react/components/hub-navigation')(HubNavigation, HubNavigationEditConfig);

export default HubNavigation;