<template lang='pug'>
  Modal.editOrderModal(@confirm="confirm"
    @close="close"
    :isModalVisible="isModalVisible")
    template(slot="header")
      .editOrderModal__header
        span 改一改
    template(slot="content")
      .editOrderModal__content
        .editOrderModal__wrapper
          span.editOrderModal__label 姓名
          span.editOrderModal__label 飲品名稱
          span.editOrderModal__label 飲品價格
        .editOrderModal__wrapper
          input.editOrderModal__input(type="text"
            placeholder="請輸入你的名字" v-model="newOrder.name")
          input.editOrderModal__input(type="text"
            placeholder="今天想喝什麼" v-model="newOrder.drink")
          input.editOrderModal__input(type="text"
            placeholder="花多少錢" v-model.number="newOrder.price")
          span.editOrderModal__alert(v-show="showAlert") 請輸入數字
        .editOrderModal__wrapper
          .editOrderModal__radioButtons
            .editOrderModal__radioButton(:class="classSugarObject('正常')"
              @click="newOrder.sugar='正常'") 正常
            .editOrderModal__radioButton(:class="classSugarObject('半糖')"
              @click="newOrder.sugar='半糖'") 半糖
            .editOrderModal__radioButton(:class="classSugarObject('少糖')"
              @click="newOrder.sugar='少糖'") 少糖
            .editOrderModal__radioButton(:class="classSugarObject('無糖')"
              @click="newOrder.sugar='無糖'") 無糖
          .editOrderModal__radioButtons
            .editOrderModal__radioButton(:class="classIceObject('正常')"
              @click="newOrder.ice='正常'") 正常
            .editOrderModal__radioButton(:class="classIceObject('半冰')"
              @click="newOrder.ice='半冰'") 半冰
            .editOrderModal__radioButton(:class="classIceObject('少冰')"
              @click="newOrder.ice='少冰'") 少冰
            .editOrderModal__radioButton(:class="classIceObject('去冰')"
              @click="newOrder.ice='去冰'") 去冰
        .editOrderModal__wrapper
          input.editOrderModal__notes(type="text"
            placeholder="notes" maxlength="20" v-model="newOrder.notes")

</template>
<script>
import Modal from '@/components/Modal/Modal';

export default {
  name: 'editOrderModal',
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
      return option => ({ 'editOrderModal__radioButton--selected': this.newOrder.sugar === option });
    },
    classIceObject() {
      return option => ({ 'editOrderModal__radioButton--selected': this.newOrder.ice === option });
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped lang="scss">
.editOrderModal {
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
    cursor: pointer;
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
