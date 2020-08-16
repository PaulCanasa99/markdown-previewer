import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import './myStyles.scss';
class Editor extends Component {
  render() {
    return (
      <div className={this.props.classes}>
        <div className="toolbar">
          <FontAwesomeIcon icon={faFreeCodeCamp} className="toolbar__icon" />
          Editor
          <FontAwesomeIcon
            icon={this.props.icon}
            onClick={this.props.onClick}
            className="toolbar__icon2"
          />
        </div>

        <textarea
          id="editor"
          value={this.props.markdown}
          onChange={this.props.onChange}
          type="text"
        />
      </div>
    );
  }
}

export default Editor;
