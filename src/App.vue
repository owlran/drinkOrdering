<template lang='pug'>
  #app
    Header(:totalAmount="totalAmount")
    OrderList(:orders="orders" @deleteOrder="deleteOrderByIndex")
    AddOrder(@submitOrder="submitOrder")
</template>

<script>
import OrderList from '@/components/OrderList.vue';
import AddOrder from '@/components/AddOrder.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'app',
  data() {
    return {
      orders: [{
        name: '四季春',
        price: 50,
        notes: '123444',
      },
      {
        name: '波霸奶茶',
        price: 500,
        notes: '去冰',
      }],
    };
  },
  components: {
    OrderList,
    AddOrder,
    Header,
  },
  computed: {
    totalAmount() {
      return this.orders.reduce((total, current) => {
        total += current.price; // eslint-disable-line no-param-reassign
        return total;
      }, 0);
    },
  },
  methods: {
    deleteOrderByIndex(index) {
      this.orders.splice(index, 1);
    },
    submitOrder(order) {
      this.orders.push(order);
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: #3c3e50;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #fff;
}
* {
  box-sizing: border-box;
}
</style>
