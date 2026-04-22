import { MapTo } from '@adobe/aem-react-editable-components';
import React, { Component } from 'react';

require('./ContentCardV1.css');
require('./ContentCardV2.css');
require('./ContentCardV3.css');
require('./ContentCardV4.css');

/**
 * Edit configuration for ContentCard component
 */
const ContentCardEditConfig = {
    emptyLabel: 'Content Card',
    isEmpty: function(props) {
        return !props || !props.title;
    }
};

/**
 * Content Card component
 */
class ContentCard extends Component {
    render() {
        const {
            cardImage,
            category,
            title,
            description,
            link,
            variant,
            cssClassNames
        } = this.props;

        if (!title) {
            return <div className="content-card empty">Please add card content</div>;
        }

        // Determine variant from prop or cssClassNames
        let cardClass = 'content-card-v1';
        if (variant === 'v2' || (cssClassNames && cssClassNames.includes('card--variant-2'))) {
            cardClass = 'content-card-v2';
        } else if (variant === 'v3' || (cssClassNames && cssClassNames.includes('card--variant-3'))) {
            cardClass = 'content-card-v3';
        } else if (variant === 'v4' || (cssClassNames && cssClassNames.includes('card--variant-4'))) {
            cardClass = 'content-card-v4';
        }
        
        const classNames = `${cardClass} ${cssClassNames || ''}`.trim();

        return (
            <article className={classNames}>
                {cardImage && (
                    <div className="card-image-wrapper">
                        <img src={cardImage} alt={title} className="card-image" />
                        {category && <span className="card-category-badge">{category}</span>}
                    </div>
                )}
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    {description && <p className="card-description">{description}</p>}
                    {link && (
                        <a href={link} className="card-link">
                            <span>Learn More</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </a>
                    )}
                </div>
            </article>
        );
    }
}

MapTo('wknd-spa-react/components/content-card')(ContentCard, ContentCardEditConfig);

export default ContentCard;
