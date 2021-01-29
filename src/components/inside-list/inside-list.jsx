import React from 'react';
import PropTypes from 'prop-types';

import InsideItem from '@/components/inside-item/inside-item';

const InsideList = (props) => {
  const {goods} = props;

  return (
    <ul className="property__inside-list">
      {goods.map((insideItem) => <InsideItem key={insideItem} item={insideItem} />)}
    </ul>
  );
};

InsideList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default InsideList;
