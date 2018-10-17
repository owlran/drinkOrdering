<template lang='pug'>
  Modal.addOrderModal(@confirm="confirm"
    @close="close"
    :isModalVisible="isModalVisible")
    template(slot="header")
      .addOrderModal__header
        span 改一改
    template(slot="content")
      .addOrderModal__content
        .addOrderModal__wrapper
          span.addOrderModal__label 姓名
          span.addOrderModal__label 飲品名稱
          span.addOrderModal__label 飲品價格
        .addOrderModal__wrapper
          input.addOrderModal__input(type="text" placeholder="請輸入你的名字" v-model="newOrder.name")
          input.addOrderModal__input(type="text" placeholder="今天想喝什麼" v-model="newOrder.drink")
          input.addOrderModal__input(type="text" placeholder="花多少錢" v-model.number="newOrder.price")
          span.addOrderModal__alert(v-show="showAlert") 請輸入數字
        .addOrderModal__wrapper
          .addOrderModal__radioButtons
            .addOrderModal__radioButton(:class="classSugarObject('正常')"
              @click="newOrder.sugar='正常'") 正常
            .addOrderModal__radioButton(:class="classSugarObject('半糖')"
              @click="newOrder.sugar='半糖'") 半糖
            .addOrderModal__radioButton(:class="classSugarObject('少糖')"
              @click="newOrder.sugar='少糖'") 少糖
            .addOrderModal__radioButton(:class="classSugarObject('無糖')"
              @click="newOrder.sugar='無糖'") 無糖
          .addOrderModal__radioButtons
            .addOrderModal__radioButton(:class="classIceObject('正常')"
              @click="newOrder.ice='正常'") 正常
            .addOrderModal__radioButton(:class="classIceObject('半冰')"
              @click="newOrder.ice='半冰'") 半冰
            .addOrderModal__radioButton(:class="classIceObject('少冰')"
              @click="newOrder.ice='少冰'") 少冰
            .addOrderModal__radioButton(:class="classIceObject('去冰')"
              @click="newOrder.ice='去冰'") 去冰
        .addOrderModal__wrapper
          input.addOrderModal__notes(type="text"
            placeholder="notes" maxlength="20" v-model="newOrder.notes")

</template>
<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'addOrderModal',
  data() {
    return {
      newOrder: {
        name: '',
        drink: '',
        price: '',
        sugar: '正常',
        ice: '正常',
        notes: '',
      },
      showAlert: false,
    };
  },
  props: {
    isModalVisible: {
      type: Boolean,
    },
    order: {
      type: Object,
    },
  },
  watch: {
    order() {
      this.newOrder = Object.assign({}, this.order);
    },
  },
  methods: {
    checkPriceIsNumber() {
      return typeof this.newOrder.price === 'number';
    },
    confirm() {
      if (this.checkPriceIsNumber()) {
        this.showAlert = false;
        this.$emit('confirm', this.newOrder);
        this.close();
      } else {
        this.showAlert = true;
      }
    },
    close() {
      this.$emit('close');
    },
  },
  computed: {
    classSugarObject() {
      return option => ({ 'addOrderModal__radioButton--selected': this.order.sugar === option });
    },
    classIceObject() {
      return option => ({ 'addOrderModal__radioButton--selected': this.order.ice === option });
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
    color: #00c7e6;
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
  &__alert {
    color: red;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
