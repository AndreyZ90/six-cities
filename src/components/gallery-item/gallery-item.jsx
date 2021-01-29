import React from 'react';
import PropTypes from 'prop-types';

const GalleryItem = (props) => {
  const {src} = props;

  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={`/${src}`} alt="Photo studio" />
    </div>
  );
};

GalleryItem.propTypes = {
  src: PropTypes.string.isRequired
};

export default GalleryItem;
