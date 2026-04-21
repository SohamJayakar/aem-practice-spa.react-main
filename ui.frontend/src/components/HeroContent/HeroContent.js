import { MapTo } from '@adobe/aem-react-editable-components';
import React, { Component } from 'react';

require('./HeroContent.css');

/**
 * Edit configuration for HeroContent component
 */
const HeroContentEditConfig = {
    emptyLabel: 'Hero Content',
    isEmpty: function(props) {
        return !props || !props.headline;
    }
};

/**
 * Hero/Featured Content component
 */
class HeroContent extends Component {
    render() {
        const {
            headline,
            description,
            ctaLabel,
            ctaLink,
            category
        } = this.props;

        if (!headline) {
            return <div className="hero-content empty">Please add headline content</div>;
        }

        return (
            <section className="hero-content">
                <div className="hero-background">
                    {/* Background gradient overlay */}
                </div>
                <div className="hero-content-wrapper">
                    {category && <span className="hero-category-badge">{category}</span>}
                    <h1 className="hero-headline">{headline}</h1>
                    {description && <p className="hero-description">{description}</p>}
                    {ctaLabel && ctaLink && (
                        <a href={ctaLink} className="hero-cta-button">
                            {ctaLabel}
                        </a>
                    )}
                </div>
            </section>
        );
    }
}

MapTo('wknd-spa-react/components/hero-content')(HeroContent, HeroContentEditConfig);

export default HeroContent;
