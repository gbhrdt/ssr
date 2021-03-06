import React, { PropTypes as pt } from 'react';
import { withRouter } from 'react-router-dom';
import { pure } from 'meteor/ssrwpo:ssr';

const TransitionButton = ({ href, push, children }) => (
  <button onClick={() => push(href)}>
    {children}
  </button>
);
TransitionButton.propTypes = {
  href: pt.string.isRequired,
  push: pt.func.isRequired,
  children: pt.oneOfType([pt.string, pt.element]).isRequired,
};
export default withRouter(pure(TransitionButton));
