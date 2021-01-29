import React from 'react';
import PropTypes from 'prop-types';

import GalleryItem from '@/components/gallery-item/gallery-item';

const Gallery = (props) => {
  const {images} = props;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image, index) => (
          <GalleryItem key={`${image}-${index}`} src={image} />
        ))}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Gallery;
