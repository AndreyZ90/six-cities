import React from 'react';
import PropTypes from 'prop-types';

const Inside = (props) => {
  const {children} = props;

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      {children}
    </div>
  );
};

Inside.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default Inside;
