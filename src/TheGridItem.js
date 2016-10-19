// good examples of code here: https://facebook.github.io/react/docs/reusable-components.html
import React, { Component } from 'react';
import './App.css';

import { Col } from 'react-bootstrap';

class GridItem extends Component {
  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} {...this.props}>
        {this.props.children}
      </Col>
    );
  }
}
export default GridItem;
