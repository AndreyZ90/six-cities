import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import NotFoundPage from '@/pages/not-found-page/not-found-page';

import Header from '@/containers/header/header';
import Gallery from '@/components/gallery/gallery';
import PremiumMarkDetails from '@/components/premium-mark-details/premium-mark-details';
import BookmarkButtonDetails from '@/components/bookmark-button-details/bookmark-button-details';
import RatingDetails from '@/components/rating-details/rating-details';
import FeatureList from '@/components/feature-list/feature-list';
import PriceDetails from '@/components/price-details/price-details';
import Inside from '@/components/inside/inside';
import InsideList from '@/components/inside-list/inside-list';
import Host from '@/components/host/host';
import Review from '@/components/review/review';
import ReviewList from '@/components/review-list/review-list';
import ReviewForm from '@/components/review-form/review-form';
import MapDetails from '@/components/map-details/map-details';
import Nearby from '@/components/nearby/nearby';
import OfferListNearby from '@/components/offer-list-nearby/offer-list-nearby';

import {AuthStatus, HouseType} from '@/helpers/const';
import {getGeoCoords} from '@/helpers/common';

export default class OfferDetailsPage extends PureComponent {
  componentDidMount() {
    this.props.fetchData(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.props.fetchData(this.props.id);
    }
  }

  render() {
    const {
      offer = {},
      reviews = [],
      nearby = [],
      id,
      authStatus,
      onFormSubmit
    } = this.props;

    if (Object.keys(offer).length === 0) {
      return <NotFoundPage />;
    }

    const {
      isFavorite,
      isPremium,
      price,
      rating,
      title,
      type,
      images,
      bedrooms,
      maxAdults,
      goods,
      host,
      description,
      city
    } = offer;

    const geoCoords = getGeoCoords(nearby);
    const activeGeoCoords = getGeoCoords(this.props.offer);
    const cityCoords = getGeoCoords(city);
    const zoom = city.location.zoom;

    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <Gallery images={images} />
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && <PremiumMarkDetails />}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <BookmarkButtonDetails isActive={isFavorite} id={id} />
                </div>
                <RatingDetails rating={rating} />
                <FeatureList
                  type={type}
                  bedrooms={bedrooms}
                  maxAdults={maxAdults}
                />
                <PriceDetails price={price} />
                <Inside>
                  <InsideList goods={goods} />
                </Inside>
                <Host host={host} description={description} />
                <Review count={reviews.length}>
                  <ReviewList reviews={reviews} />
                  {authStatus === AuthStatus.AUTH ? <ReviewForm id={id} onFormSubmit={onFormSubmit} /> : null}
                </Review>
              </div>
            </div>
            <MapDetails
              geoCoords={geoCoords}
              activeGeoCoords={activeGeoCoords}
              center={cityCoords}
              zoom={zoom}
            />
          </section>
          <div className="container">
            <Nearby>
              <OfferListNearby offers={nearby} />
            </Nearby>
          </div>
        </main>
      </div>
    );
  }
}

OfferDetailsPage.propTypes = {
  offer: PropTypes.shape({
    isFavorite: PropTypes.bool,
    isPremium: PropTypes.bool,
    price: PropTypes.number,
    rating: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.oneOf(Object.keys(HouseType)),
    images: PropTypes.arrayOf(PropTypes.string),
    bedrooms: PropTypes.number,
    maxAdults: PropTypes.number,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }),
    description: PropTypes.string,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired
      }).isRequired
    }),
  }),
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
  fetchData: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  authStatus: PropTypes.oneOf(Object.values(AuthStatus)).isRequired,
  onFormSubmit: PropTypes.func.isRequired
};

