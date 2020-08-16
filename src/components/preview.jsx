import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import marked from 'marked';

import './myStyles.scss';
class Preview extends Component {
  render() {
    marked.setOptions({
      breaks: true,
    });
    return (
      <div className={this.props.classes}>
        <div className="toolbar">
          <FontAwesomeIcon icon={faFreeCodeCamp} className="toolbar__icon" />
          Preview
          <FontAwesomeIcon
            icon={this.props.icon}
            onClick={this.props.onClick}
            className="toolbar__icon2"
          />
        </div>

        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(this.props.markdown),
          }}
        />
      </div>
    );
  }
}

export default Preview;
