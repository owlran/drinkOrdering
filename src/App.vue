<template>
  <div class="app">
    <Header :totalAmount="totalAmount" @addDrink="isAddModalVisible = true"></Header>
    <div class="app__container">
      <order-list :orders="orders"
        @editOrder="showEditModal" @deleteOrder="showDeleteModal"></order-list>
    <add-or-edit-order-modal v-show="isAddModalVisible"
      :isModalVisible="isAddModalVisible"
      :isAddingMode="true"
      @close="isAddModalVisible = false"
      @confirm="confirmToAddNewOrder"></add-or-edit-order-modal>
    <delete-order-modal v-show="isDeletionModalVisible"
      :isModalVisible="isDeletionModalVisible"
      @close="isDeletionModalVisible = false" @confirm="deleteOrderByIndex"></delete-order-modal>
    <add-or-edit-order-modal v-show="isEditModalVisible"
      :isModalVisible="isEditModalVisible"
      :isAddingMode="false"
      :order="focusedOrder"
      @close="isEditModalVisible = false" @confirm="updateOrderByIndex"></add-or-edit-order-modal>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import OrderList from '@/components/OrderList';
import DeleteOrderModal from '@/components/Modal/DeleteOrderModal';
import AddOrEditModal from '@/components/Modal/AddOrEditModal';

import orderStorage from '@/utils/orderStorage';

export default {
  name: 'app',
  data() {
    return {
      currentIndex: -1,
      orders: [],
      isAddModalVisible: false,
      isDeletionModalVisible: false,
      isEditModalVisible: false,
    };
  },
  components: {
    Header,
    OrderList,
    DeleteOrderModal,
    AddOrEditModal,
  },
  computed: {
    totalAmount() {
      return this.orders.reduce((total, currentOrder) => total + currentOrder.price, 0);
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
    confirmToAddNewOrder(order) {
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
    assignDocumentTitle(title) {
      document.title = title;
    },
  },
  watch: {
    orders() {
      orderStorage.save(this.orders);
    },
  },
  mounted() {
    this.orders = orderStorage.fetch();
    this.assignDocumentTitle('來喝飲料囉！');
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
.app {
  width: 900px;
  margin: 0 auto;
  background-color: #fff;
  &__container {
    background-color: rgba(191, 240, 248, 0.5);
    border: 1px solid rgba(191, 240, 248, 0.5);
    height: 100vh;
  }
}

</style>
