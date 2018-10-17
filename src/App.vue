<template lang='pug'>
  #app
    Header(:totalAmount="totalAmount")
    .container
      OrderList(:orders="orders" @deleteOrder="deleteOrderByIndex")
</template>

<script>
import OrderList from '@/components/OrderList.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'app',
  data() {
    return {
      orders: [{
        drink: '四季春',
        price: 50,
        notes: '最多二十字：備註文字備註文字備註文字備註',
        sugar: '無糖',
        ice: '去冰',
        name: '王大明',
      },
      {
        drink: '波霸奶茶',
        price: 500,
        notes: '去冰',
        sugar: '全糖',
        ice: '半冰',
        name: 'eric',
      }],
    };
  },
  components: {
    OrderList,
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
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 900px;
  margin: 0 auto;
  background-color: #fff;
}

.container {
  background-color: rgba(191, 240, 248, 0.5);
  border: 1px solid rgba(191, 240, 248, 0.5);
  height: 100vh;
}
</style>
