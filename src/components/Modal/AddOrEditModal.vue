<template>
  <modal class="addOrEditModal"
    @confirm="confirm"
    @close="close"
    :isModalVisible="isModalVisible">
    <template slot="header">
      <div class="addOrEditModal__header">
        <span v-if="isAddingMode">喝什麼 ?</span>
        <span v-else>改一改</span>
      </div>
    </template>
    <template slot="content">
        <div class="addOrEditModal__content">
          <div class="addOrEditModal__wrapper">
            <span class="addOrEditModal__label">姓名</span>
            <span class="addOrEditModal__label">飲品名稱</span>
            <span class="addOrEditModal__label">飲品價格</span>
          </div>
          <div class="addOrEditModal__wrapper">
            <input class="addOrEditModal__input" type="text"
              placeholder="請輸入你的名字" v-model="cachedOrder.name">
            <input class="addOrEditModal__input" type="text"
              placeholder="今天想喝什麼" v-model="cachedOrder.drink">
            <input class="addOrEditModal__input" type="number"
              placeholder="花多少錢" v-model.number="cachedOrder.price">
            <span class="addOrEditModal__alert" v-show="showAlert">請輸入數字</span>
          </div>
          <div class="addOrEditModal__wrapper">
            <div class="addOrEditModal__radioButtons">
              <div class="addOrEditModal__radioButton"
                :class="classSugarObject('正常')"
                @click="cachedOrder.sugar='正常'">正常</div>
              <div class="addOrEditModal__radioButton"
                :class="classSugarObject('半糖')"
                @click="cachedOrder.sugar='半糖'">半糖</div>
              <div class="addOrEditModal__radioButton"
                :class="classSugarObject('少糖')"
                @click="cachedOrder.sugar='少糖'">少糖</div>
              <div class="addOrEditModal__radioButton"
                :class="classSugarObject('無糖')"
                @click="cachedOrder.sugar='無糖'">無糖</div>
            </div>
            <div class="addOrEditModal__radioButtons">
              <div class="addOrEditModal__radioButton"
                :class="classIceObject('正常')" @click="cachedOrder.ice='正常'">正常</div>
              <div class="addOrEditModal__radioButton"
                :class="classIceObject('半冰')" @click="cachedOrder.ice='半冰'">半冰</div>
              <div class="addOrEditModal__radioButton"
                :class="classIceObject('少冰')" @click="cachedOrder.ice='少冰'">少冰</div>
              <div class="addOrEditModal__radioButton"
                :class="classIceObject('去冰')" @click="cachedOrder.ice='去冰'">去冰</div>
            </div>
          </div>
          <div class="addOrEditModal__wrapper">
            <input class="addOrEditModal__notes" type="number"
              placeholder="notes" maxlength="20" v-model="cachedOrder.notes">
          </div>
        </div>
    </template>
  </modal>
</template>
<script>
import Modal from '@/components/Modal/Modal';

export default {
  name: 'refactorOrderModal',
  data() {
    return {
      cachedOrder: null,
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
    isAddingMode: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    order() {
      if (this.isEditingMode) {
        this.updateCachedOrder();
      }
    },
    isModalVisible() {
      if (this.isModalVisible && this.isEditingMode) {
        this.updateCachedOrder();
      }
    },
  },
  methods: {
    initOrder() {
      this.cachedOrder = {
        drink: '',
        price: 0,
        notes: '',
        sugar: '正常',
        ice: '正常',
        name: '',
      };
    },
    updateCachedOrder() {
      this.cachedOrder = Object.assign({}, this.order);
    },
    checkPriceIsNumber() {
      return typeof this.cachedOrder.price === 'number';
    },
    confirm() {
      if (this.checkPriceIsNumber()) {
        this.showAlert = false;
        this.$emit('confirm', this.cachedOrder);
        this.close();
      } else {
        this.showAlert = true;
      }
    },
    close() {
      this.initOrder();
      this.$emit('close');
    },
  },
  computed: {
    isEditingMode() {
      return this.isAddingMode === false;
    },
    classSugarObject() {
      return option => ({ 'addOrEditModal__radioButton--selected': this.cachedOrder.sugar === option });
    },
    classIceObject() {
      return option => ({ 'addOrEditModal__radioButton--selected': this.cachedOrder.ice === option });
    },
  },
  components: {
    Modal,
  },
  mounted() {
    this.initOrder();
  },
};
</script>

<style scoped lang="scss">
.addOrEditModal {
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
    padding-top: 13px;
    padding-bottom: 13px;
    &::placeholder {
      color: #d3d3d3;
    }
    &:nth-child(1), &:nth-child(2) {
      margin-right: 10px;
      width: 200px;
      padding-left: 15px;
    }
    &:nth-child(3) {
      width: 80px;
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
    width: 62px;
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
