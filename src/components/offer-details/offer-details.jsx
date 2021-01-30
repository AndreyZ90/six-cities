import React from 'react';
import PropTypes from 'prop-types';

import Gallery from '@/components/gallery/gallery';
import Inside from '@/components/inside/inside';
import InsideList from '@/components/inside-list/inside-list';
import Host from '@/components/host/host';
import Review from '@/components/review/review';
import ReviewList from '@/components/review-list/review-list';
import ReviewForm from '@/components/review-form/review-form';
import MapDetails from '@/components/map-details/map-details';
import Nearby from '@/components/nearby/nearby';
import OfferListNearby from '@/components/offer-list-nearby/offer-list-nearby';

import {HouseType} from '@/helpers/const';
import {convertRatingToStyle, getGeoCoords} from '@/helpers/common';

const OfferDetails = (props) => {
  const {
    offer: {
      isFavorite,
      isPremium,
      price,
      rating,
      title,
      type,
      images,
      berdrooms,
      maxAdults,
      goods,
      host,
      description,
      city
    },
    reviews,
    nearby,
    onTitleClick
  } = props;

  const activeClass = isFavorite ? `property__bookmark-button--active` : ``;
  const geoCoords = getGeoCoords(nearby);
  const cityCoords = getGeoCoords(city);
  const zoom = city.location.zoom;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery images={images} />
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${activeClass}`} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${convertRatingToStyle(rating)}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {HouseType[type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${berdrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <Inside>
                <InsideList goods={goods} />
              </Inside>
              <Host host={host} description={description} />
              <Review count={reviews.length}>
                <ReviewList reviews={reviews} />
                <ReviewForm />
              </Review>
            </div>
          </div>
          <MapDetails
            geoCoords={geoCoords}
            center={cityCoords}
            zoom={zoom}
          />
        </section>
        <div className="container">
          <Nearby>
            <OfferListNearby offers={nearby} onTitleClick={onTitleClick} />
          </Nearby>
        </div>
      </main>
    </div>
  );
};

OfferDetails.propTypes = {
  offer: PropTypes.shape({
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(HouseType)).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    berdrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    description: PropTypes.string.isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired
      }).isRequired
    }).isRequired,
  }).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  })).isRequired,
  nearby: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(HouseType)).isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired,
  })).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default OfferDetails;
