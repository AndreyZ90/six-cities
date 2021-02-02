import React from 'react';
import PropTypes from 'prop-types';

const Places = (props) => {
  const {count, children} = props;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{count} places to stay in Amsterdam</b>
      {children}
    </section>
  );
};

Places.propTypes = {
  count: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default Places;
