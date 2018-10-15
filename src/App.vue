<template lang='pug'>
  #app
    h1 {{ currentDate }}
    OrderList(:orders="orders" @deleteOrder="deleteOrderByIndex")
    AddOrder(@submitOrder="submitOrder")
</template>

<script>
import OrderList from '@/components/OrderList.vue';
import AddOrder from '@/components/AddOrder.vue';

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
  },
  computed: {
    currentDate() {
      return new Date().toJSON().slice(0, 10).replace(/-/g, '/');
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
