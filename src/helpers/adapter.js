export default class Adapter {
  static offer(offer) {
    return {
      id: offer.id,
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      previewImage: offer.preview_image,
      price: offer.price,
      rating: offer.rating,
      title: offer.title,
      type: offer.type,
      images: offer.images,
      bedrooms: offer.bedrooms,
      maxAdults: offer.max_adults,
      goods: offer.goods,
      host: {
        avatarUrl: offer.host.avatar_url,
        id: offer.host.id,
        isPro: offer.host.is_pro,
        name: offer.host.name
      },
      description: offer.description,
      location: offer.location,
      city: offer.city
    };
  }

  static offers(offers) {
    return offers.map((data) => this.offer(data));
  }
}
