<template lang='pug'>
  Modal.addOrderModal(@confirm="confirm"
    @close="close"
    :isModalVisible="isModalVisible")
    template(slot="header")
      .addOrderModal__header
        span 不喝了嗎
    template(slot="content")
      .addOrderModal__content
        .addOrderModal__wrapper
          span.addOrderModal__label 確定取消這筆訂單嗎？
</template>
<script>
import Modal from '@/components/Modal/Modal.vue';

export default {
  name: 'deleteOrderModal',
  data() {
    return {
      newOrder: {
        drink: '',
        price: 0,
        notes: '',
        sugar: '正常',
        ice: '正常',
        name: '',
      },
    };
  },
  props: {
    isModalVisible: {
      type: Boolean,
    },
  },
  methods: {
    resetOrder() {
      this.newOrder = {
        drink: '',
        price: 0,
        notes: '',
        sugar: '正常',
        ice: '正常',
        name: '',
      };
    },
    confirm() {
      const cloneOrder = Object.assign({}, this.newOrder);
      this.resetOrder();
      this.$emit('confirm', cloneOrder);
      this.close();
    },
    close() {
      this.$emit('close');
    },
  },
  computed: {
    classSugarObject() {
      return option => ({ 'addOrderModal__radioButton--selected': this.newOrder.sugar === option });
    },
    classIceObject() {
      return option => ({ 'addOrderModal__radioButton--selected': this.newOrder.ice === option });
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped lang="scss">
.addOrderModal {
  &__header {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #000;
  }
  &__content {
    width: 520px;
  }
  &__label {
    font-size: 14px;
    color: #888;
    &:nth-child(1) {
      margin-right: 182px;
    }
    &:nth-child(2) {
      margin-right: 154px;
    }
  }
  &__wrapper {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
  &__input {
    border-radius: 3px;
    outline: none;
    &::placeholder {
      color: #d3d3d3;
    }
    &:nth-child(1) {
      margin-right: 10px;
      width: 200px;
      padding-top: 13px;
      padding-bottom: 13px;
      padding-left: 15px;
    }
    &:nth-child(2) {
      margin-right: 10px;
      width: 200px;
      padding-top: 13px;
      padding-bottom: 13px;
      padding-left: 15px;
    }
    &:nth-child(3) {
      width: 100px;
      padding-top: 13px;
      padding-bottom: 13px;
      padding-left: 15px;
    }
  }
  &__radioButtons {
    display: inline-flex;
    flex-direction: row;
    &:first-child {
      margin-right: 8px;
    }
  }
  &__radioButton {
    font-size: 14px;
    color: #888;
    border: 1px solid #dedede;
    width: 64px;
    height: 40px;
    padding-top: 10px;
    padding-left: 18px;
    &--selected {
      color: #00c7e6;
      border-color: #00c7e6;
    }
  }
  &__notes {
    width: 520px;
    height: 40px;
    padding-top: 13px;
    padding-left: 20px;
    padding-bottom: 13px;
    border-radius: 3px;
  }
}
</style>
