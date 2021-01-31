import React from 'react';
import PropTypes from 'prop-types';

import {ClassPrefix} from '@/helpers/const';

const BookmarkButton = (props) => {
  const {isActive, classPrefix, size: [width, height]} = props;

  const activeClass = isActive ? `${classPrefix}__bookmark-button--active` : ``;

  return (
    <button className={`${classPrefix}__bookmark-button button ${activeClass}`} type="button">
      <svg className={`${classPrefix}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

BookmarkButton.defaultProps = {
  classPrefix: ClassPrefix.CARD,
  size: [18, 19]
};

BookmarkButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  classPrefix: PropTypes.oneOf(Object.values(ClassPrefix)),
  size: PropTypes.arrayOf(PropTypes.number)
};

export default BookmarkButton;
