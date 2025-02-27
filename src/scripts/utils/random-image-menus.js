const foodImages = [
  'food1.jpg',
  'food2.jpg',
  'food3.jpg',
  'food4.jpg',
  'food5.jpeg',
];
const drinkImages = [
  'drink1.jpg',
  'drink2.jpg',
  'drink3.jpg',
  'drink4.jpg',
  'drink5.jpg',
];

const getRandomImage = (type) => {
  if (type === 'food') {
    return `../../images/foods/${foodImages[Math.floor(Math.random() * foodImages.length)]}`;
  } else if (type === 'drink') {
    return `../../images/drinks/${drinkImages[Math.floor(Math.random() * drinkImages.length)]}`;
  }
};

export default getRandomImage;
