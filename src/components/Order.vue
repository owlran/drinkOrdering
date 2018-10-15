<template lang='pug'>
  .order
    .order__inputRow(v-if="isEditing===false")
      .order__name
        span name:
        span {{ order.name }}
      .order__price
        span price:
        span {{ order.price }}
      .order__notes
        span notes:
        span {{ order.notes }}
    .order__inputRow.order__inputRow--editing(v-else)
      .order__name
        span name:
        input(v-model="order.name")
      .order__price
        span price:
        input(v-model="order.price")
      .order__notes
        span notes:
        input(v-model="order.notes")
    .order__button.order__button--delete
      button(@click="deleteHandler") delete
    .order__button.order__button--edit(v-if="isEditing===false")
      button(@click="editHandler") edit
    .order__button.order__button--editing(v-else)
      button(@click="editingHandler") finish edit
</template>

<script>
export default {
  name: 'Order',
  data() {
    return {
      isEditing: false,
    };
  },
  props: {
    order: Object,
    index: Number,
  },
  methods: {
    deleteHandler() {
      this.$emit('deleteOrder', this.index);
    },
    editHandler() {
      this.isEditing = true;
    },
    editingHandler() {
      this.isEditing = false;
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
