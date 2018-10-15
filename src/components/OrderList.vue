<template lang='pug'>
.orderListContainer
  .orderList(v-for="(order, index) in orders")
    Order(:order="order" :index="index" @deleteOrder="deleteOrder")
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
  methods: {
    deleteOrder(index) {
      this.$emit('deleteOrder', index);
    },
  },
};
</script>

<style scoped lang="scss">

</style>
