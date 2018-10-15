<template lang='pug'>
.orderListContainer
  .orderList(v-for="order in orders")
    Order(:order="order")
</template>

<script>
import Order from '@/components/Order.vue';

export default {
  name: 'OrderList',
  props: {
    orders: Array,
  },
  components: {
    Order,
  },
};
</script>

<style scoped lang="scss">

</style>
