<template lang='pug'>
  .addOrder
    .addOrder__button(v-if="isAdding === false")
      button(@click="addOrder") +
    .addOrder__form(v-else)
      label name:
        input(v-model="order.name")
      br
      label price:
        input(v-model="order.price")
      br
      label notes:
        input(v-model="order.notes")
      br
      button(@click="submitOrder") submit
</template>

<script>
export default {
  name: 'AddOrder',
  data() {
    return {
      isAdding: false,
      order: {
        name: '',
        price: '',
        notes: '',
      },
    };
  },
  methods: {
    addOrder() {
      this.isAdding = true;
    },
    submitOrder() {
      this.isAdding = false;
      const copyOrder = Object.assign({}, this.order);
      this.$emit('submitOrder', copyOrder);
      this.resetOrder();
    },
    resetOrder() {
      this.order = {
        name: '',
        price: '',
        notes: '',
      };
    },
  },
};
</script>

<style scoped lang="scss">
.order {
  border: 1px solid red;
}
</style>
