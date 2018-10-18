<template>
<div class="orderList">
  <div class="orderList__card orderList__card--empty" v-if="orders.length===0">
    <img src="../assets/drink-none.png" alt="">
    <span>目前沒有訂單</span>
  </div>
  <div class="orderList__card" v-else v-for="(order, index) in orders" :key="index">
    <order :order="order" :index="index"
      :key="index"
      @editOrder="editOrder"
      @deleteOrder="deleteOrder"/>
  </div>
</div>
</template>

<script>
import Order from '@/components/Order';

export default {
  name: 'OrderList',
  props: {
    orders: Array,
  },
  components: {
    Order,
  },
  methods: {
    editOrder(index) {
      this.$emit('editOrder', index);
    },
    deleteOrder(index) {
      this.$emit('deleteOrder', index);
    },
  },
};
</script>

<style scoped lang="scss">
.orderList {
  background-color: rgba(191, 240, 248, 0.5);
  &__card {
    width: 900px;
    height: 100px;
    border-radius: 3px;
    box-shadow: 2px 2px 8px 0 rgba(9, 30, 66, 0.1);
    background-color: #ffffff;
    margin-top: 10px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:nth-of-type(1) {
      margin-top: 30px;
    }
    &--empty {
      display: flex;
      justify-content: center;
      align-items: center;
      border: dashed 2px #d3d3d3;
      background-color: rgba(255, 255, 255, 0.5);
      img {
        width: 30px;
        height: 40px;
      }
      span {
        margin-left: 25px;
        font-size: 20px;
        color: #d3d3d3;
      }
    }
  }
}
</style>
