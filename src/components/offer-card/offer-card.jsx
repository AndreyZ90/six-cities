import React from 'react';
import PropTypes from 'prop-types';

import {HouseType} from '@/helpers/const';
import {convertRatingToStyle} from '@/helpers/common';

const OfferCard = (props) => {
  const {
    id,
    isFavorite,
    isPremium,
    previewImage,
    price,
    rating,
    title,
    type,
    onTitleClick,
    onActiveCardChange
  } = props;

  const activeClass = isFavorite ? `place-card__bookmark-button--active` : ``;

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => onActiveCardChange(id)}
      onMouseLeave={() => onActiveCardChange(-1)}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={`/${previewImage}`} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${activeClass}`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${convertRatingToStyle(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={onTitleClick}>
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{HouseType[type]}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(HouseType)).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onActiveCardChange: PropTypes.func.isRequired
};

export default OfferCard;
