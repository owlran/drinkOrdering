const STORAGE_KEY = 'dailydrinks';
const orderStorage = {
  fetch() {
    const orders = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return orders;
  },
  save(orders) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  },
};

export default orderStorage;
