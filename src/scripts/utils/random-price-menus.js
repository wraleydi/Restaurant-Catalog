const priceList = [10000, 20000, 35000, 15000, 12000];

const getRandomPrice = () => priceList[Math.floor(Math.random() * priceList.length)];

export default getRandomPrice;
