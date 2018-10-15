<template lang='pug'>
  .order
    .order__name
      p {{ order.name }}
    .order__price
      p {{ order.price }}
    .order__notes
      p {{ order.notes }}
</template>

<script>
export default {
  name: 'Order',
  props: {
    order: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.order {
  border: 1px solid red;
}
</style>
