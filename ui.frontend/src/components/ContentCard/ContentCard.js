import { MapTo } from '@adobe/aem-react-editable-components';
import React, { Component } from 'react';

require('./ContentCard.css');

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
            link
        } = this.props;

        if (!title) {
            return <div className="content-card empty">Please add card content</div>;
        }

        return (
            <article className={`content-card ${this.props.appliedCssClassNames || ''}`}>
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
