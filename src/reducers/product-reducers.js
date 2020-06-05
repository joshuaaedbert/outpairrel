const initProductState = {
  productLoading: false,
  products: [
    {
      id: 0,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/220px-Donald_Trump_official_portrait.jpg',
    },
    {
      id: 1,
      photo: 'https://i.mdel.net/oftheminute/images/2019/07/Jill-06.jpg',
    },
    {
      id: 2,
      photo:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/karlie-kloss-is-seen-wearing-a-baby-blue-ralph-lauren-news-photo-1575557364.jpg',
    },
  ],
  hasMore: true,
};

const productReducer = (state = initProductState, action) => {
  return state;
};

export default productReducer;