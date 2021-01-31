import React from 'react';
import PropTypes from 'prop-types';

const Nearby = (props) => {
  const {children} = props;

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      {children}
    </section>
  );
};

Nearby.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default Nearby;
