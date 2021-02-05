import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Places = (props) => {
  const {count, currentCity, children} = props;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{count} places to stay in {currentCity}</b>
      {children}
    </section>
  );
};

Places.propTypes = {
  count: PropTypes.number.isRequired,
  currentCity: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
};

export default memo(Places);
