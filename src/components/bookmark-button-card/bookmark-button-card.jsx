import React from 'react';
import PropTypes from 'prop-types';

import BookmarkButton from '@/components/bookmark-button/bookmark-button';

import {ClassPrefix} from '@/helpers/const';

const BookmarkButtonCard = (props) => {
  return <BookmarkButton classPrefix={ClassPrefix.CARD} size={[18, 19]} {...props} />;
};

BookmarkButtonCard.propTypes = {
  isActive: PropTypes.bool.isRequired
};

export default BookmarkButtonCard;
