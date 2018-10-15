<template lang='pug'>
  #app
    h1 {{ currentDate }}
    OrderList(:orders="orders")
</template>

<script>
import OrderList from '@/components/OrderList.vue';

export default {
  name: 'app',
  data() {
    return {
      orders: [{
        name: '四季春',
        price: 50,
        notes: '123444',
      }],
    };
  },
  components: {
    OrderList,
  },
  computed: {
    currentDate() {
      return new Date().toJSON().slice(0, 10).replace(/-/g, '/');
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
