import React, {memo} from 'react';
import PropTypes from 'prop-types';

import PremiumMarkCard from '@/components/premium-mark-card/premium-mark-card';
import PreviewImage from '@/components/preview-image/preview-image';
import PriceCard from '@/components/price-card/price-card';
import BookmarkButtonCard from '@/components/bookmark-button-card/bookmark-button-card';
import RatingCard from '@/components/rating-card/rating-card';

import {HouseType} from '@/helpers/const';

const OfferCard = (props) => {
  const {
    offer: {
      id,
      isFavorite,
      isPremium,
      previewImage,
      price,
      rating,
      title,
      type,
    },
    onTitleClick,
    className,
    onActiveCardChange,
  } = props;

  return (
    <article
      className={`${className} place-card`}
      onMouseEnter={() => onActiveCardChange(id)}
      onMouseLeave={() => onActiveCardChange(-1)}
    >
      {isPremium && <PremiumMarkCard />}
      <PreviewImage src={previewImage} />
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <PriceCard price={price} />
          <BookmarkButtonCard isActive={isFavorite} />
        </div>
        <RatingCard rating={rating} />
        <h2 className="place-card__name" onClick={onTitleClick}>
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{HouseType[type]}</p>
      </div>
    </article>
  );
};

OfferCard.defaultProps = {
  onActiveCardChange: () => {},
  className: ``
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(HouseType)).isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  onActiveCardChange: PropTypes.func,
};

export default memo(OfferCard);
