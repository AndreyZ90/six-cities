import React from 'react';
import PropTypes from 'prop-types';

import BookmarkButton from '@/components/bookmark-button/bookmark-button';

import {ClassPrefix} from '@/helpers/const';

const BookmarkButtonDetails = (props) => {
  return <BookmarkButton classPrefix={ClassPrefix.DETAILS} size={[31, 33]} {...props} />;
};

BookmarkButtonDetails.propTypes = {
  isActive: PropTypes.bool.isRequired
};

export default BookmarkButtonDetails;
