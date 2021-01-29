export default [
  {
    id: 1,
    isFavorite: true,
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 4.9,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`, `img/room.jpg`],
    berdrooms: 3,
    maxAdults: 6,
    goods: [`Heating`, `Kitchen`, `Cable TV`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: `Angelina`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`
  },
  {
    id: 2,
    isFavorite: true,
    isPremium: false,
    previewImage: `img/apartment-02.jpg`,
    price: 99,
    rating: 3.6,
    title: `Wood and stone place`,
    type: `room`,
    images: [`img/apartment-03.jpg`, `img/apartment-02.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`, `img/room.jpg`],
    berdrooms: 1,
    maxAdults: 2,
    goods: [`Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 2,
      isPro: false,
      name: `Nadezhda`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Moscow.`
  },
  {
    id: 3,
    isFavorite: false,
    isPremium: true,
    previewImage: `img/apartment-03.jpg`,
    price: 1000,
    rating: 3.4,
    title: `Canal View Prinsengracht`,
    type: `house`,
    images: [`img/apartment-02.jpg`, `img/apartment-01.jpg`, `img/room.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`, `img/apartment-03.jpg`],
    berdrooms: 2,
    maxAdults: 5,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: false,
      name: `Polina`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Berlin.`
  },
  {
    id: 4,
    isFavorite: false,
    isPremium: false,
    previewImage: `img/apartment-01.jpg`,
    price: 298,
    rating: 0.9,
    title: `Nice, cozy, warm big bed apartment`,
    type: `hotel`,
    images: [`img/apartment-01.jpg`, `img/room.jpg`, `img/studio-01.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`],
    berdrooms: 2,
    maxAdults: 2,
    goods: [`Kitchen`, `Washing machine`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 4,
      isPro: true,
      name: `Jesica`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of London.`
  }
];
