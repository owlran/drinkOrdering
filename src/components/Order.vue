<template lang='pug'>
  .order
    .order__name
      span name:
      span {{ order.name }}
    .order__price
      span price:
      span {{ order.price }}
    .order__notes
      span notes:
      span {{ order.notes }}
    .order__button.order__button--delete
      button(@click="deleteHandler") delete
</template>

<script>
export default {
  name: 'Order',
  props: {
    order: Object,
    index: Number,
  },
  methods: {
    deleteHandler() {
      this.$emit('deleteOrder', this.index);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.order {
  border: 1px solid red;
}
</style>
