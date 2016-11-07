import React, { Component, PropTypes } from 'react';
const propTypes = {
  children: PropTypes.element.isRequired
};

const Layout = (props) => (
  <main>
    {props.children}
  </main>
);

Layout.propTypes = propTypes;

export default Layout;
