<template lang='pug'>
  #app
    Header(:totalAmount="totalAmount" @addDrink="isModalVisible = true")
    .container
      OrderList(:orders="orders"
        @editOrder="showEditModal"
        @deleteOrder="showDeleteModal")
    AddOrderModal(v-show="isModalVisible"
      @close="isModalVisible=false"
      @confirm="confirm"
      :isModalVisible="isModalVisible")
    DeleteOrderModal(v-show="isDeletionModalVisible"
      @close="isDeletionModalVisible = false"
      @confirm="deleteOrderByIndex"
      :isModalVisible="isDeletionModalVisible")
    EditOrderModal(v-show="isEditModalVisible"
      :order="focusedOrder"
      @close="isEditModalVisible = false"
      @confirm="updateOrderByIndex"
      :isModalVisible="isEditModalVisible"
    )
</template>

<script>
import OrderList from '@/components/OrderList.vue';
import Header from '@/components/Header.vue';
import AddOrderModal from '@/components/AddOrderModal.vue';
import DeleteOrderModal from '@/components/DeleteOrderModal.vue';
import EditOrderModal from '@/components/EditOrderModal.vue';

export default {
  name: 'app',
  data() {
    return {
      isModalVisible: false,
      isDeletionModalVisible: false,
      isEditModalVisible: false,
      currentIndex: -1,
      orders: [{
        drink: '四季春',
        price: 50,
        notes: '最多二十字：備註文字備註文字備註文字備註',
        sugar: '無糖',
        ice: '去冰',
        name: '王大明',
        id: 1,
      },
      {
        drink: '波霸奶茶',
        price: 500,
        notes: '去冰',
        sugar: '全糖',
        ice: '半冰',
        name: 'eric',
        id: 2,
      }],
    };
  },
  components: {
    OrderList,
    Header,
    AddOrderModal,
    DeleteOrderModal,
    EditOrderModal,
  },
  computed: {
    totalAmount() {
      return this.orders.reduce((total, current) => {
        total += current.price; // eslint-disable-line no-param-reassign
        return total;
      }, 0);
    },
    focusedOrder() {
      return this.orders[this.currentIndex] || {};
    },
  },
  methods: {
    showEditModal(index) {
      this.currentIndex = index;
      this.isEditModalVisible = true;
    },
    showDeleteModal(index) {
      this.currentIndex = index;
      this.isDeletionModalVisible = true;
    },
    confirm(order) {
      this.orders.push(order);
    },
    deleteOrderByIndex() {
      this.orders.splice(this.currentIndex, 1);
      this.currentIndex = -1;
    },
    updateOrderByIndex(order) {
      this.orders.splice(this.currentIndex, 1, order);
      this.currentIndex = -1;
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
