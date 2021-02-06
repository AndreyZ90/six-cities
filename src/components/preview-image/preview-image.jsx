import React from 'react';
import PropTypes from 'prop-types';

const PreviewImage = (props) => {
  const {src} = props;

  return (
    <div className="place-card__image-wrapper">
      <a>
        <img className="place-card__image" src={src} width={260} height={200} alt="Place image" />
      </a>
    </div>
  );
};

PreviewImage.propTypes = {
  src: PropTypes.string.isRequired
};

export default PreviewImage;
