import { MapTo } from '@adobe/aem-react-editable-components';
import React, { Component } from 'react';

require('./TitleText.css');

const TitleTextEditConfig = {
  emptyLabel: 'Title Text',
  isEmpty: function (props) {
    return !props || !props.title || props.title.trim().length < 1;
  }
};

class TitleText extends Component {
  render() {
    const { title } = this.props;

    if (!title) {
      return 'Please add a title';
    }

    return (
      <div className="title-text">
        <h1>{title}</h1>
      </div>
    );
  }
}

export default MapTo('wknd-spa-react/components/title-text')(
  TitleText,
  TitleTextEditConfig
);