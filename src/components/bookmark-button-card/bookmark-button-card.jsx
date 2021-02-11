import React from 'react';
import PropTypes from 'prop-types';

import BookmarkButton from '@/containers/bookmark-button/bookmark-button';

import {ClassPrefix} from '@/helpers/const';

const BookmarkButtonCard = (props) => {
  return <BookmarkButton classPrefix={ClassPrefix.CARD} size={[18, 19]} {...props} />;
};

BookmarkButtonCard.propTypes = {
  isActive: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

export default BookmarkButtonCard;
