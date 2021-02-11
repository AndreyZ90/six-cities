import React from 'react';
import PropTypes from 'prop-types';

import BookmarkButton from '@/containers/bookmark-button/bookmark-button';

import {ClassPrefix} from '@/helpers/const';

const BookmarkButtonDetails = (props) => {
  return <BookmarkButton classPrefix={ClassPrefix.DETAILS} size={[31, 33]} {...props} />;
};

BookmarkButtonDetails.propTypes = {
  isActive: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

export default BookmarkButtonDetails;
