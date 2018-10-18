<template>
  <transition name="modal-fade">
    <div class="modal" @click="close" v-show="isModalVisible">
      <div class="modal__wrapper" @click.stop="stop">
        <div class="modal__header">
          <slot name="header">
            <h2>the header of modal</h2>
          </slot>
          <button class="modal__btn" type="button" @click="close"> x</button>
        </div>
        <div class="modal__content">
          <slot name="content">
            <span>the content of modal</span>
          </slot>
        </div>
        <div class="modal__footer">
          <slot name="footer">
            <button class="modal__btn modal__btn--cancel" type="button" @click="close">
              <close-icon w="15" h="15" />
              <span>取消返回</span>
            </button>
            <button class="modal__btn modal__btn--confirm" type="button" @click="confirm">
              <check-icon w="15" h="15" />
              <span>確認送出</span>
            </button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import checkIcon from 'vue-ionicons/dist/md-checkmark';
import closeIcon from 'vue-ionicons/dist/md-close';

export default {
  name: 'modal',
  data() {
    return {
    };
  },
  props: {
    isModalVisible: {
      type: Boolean,
    },
  },
  methods: {
    stop() {},
    confirm() {
      this.$emit('confirm');
    },
    close() {
      this.$emit('close');
    },
  },
  components: {
    checkIcon,
    closeIcon,
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .3);
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrapper {
    background-color: #fff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }
  &__header, &__footer {
    display: flex;
  }

  &__header {
    border-bottom: 1px solid #eee;
    justify-content: space-between;
    padding: 20px 30px;
  }
  &__content {
    position: relative;
    padding: 30px 30px 0 30px;
  }
  &__footer {
    justify-content: flex-end;
    padding: 20px 30px 30px 0;
  }
  &__btn {
    display: flex;
    border: none 0;
    font-size: 14px;
    padding: 13px 30px 13px 30px;
    cursor: pointer;
    outline: none;
    font-weight: bold;
    color: #d3d3d3;
    fill: #d3d3d3;
    background-color: transparent;
    border-radius: 3px;
    &--cancel {
      background-color: #fff;
      border: solid 1px #dedede;
      margin-right: 15px;
    }
    &--confirm {
      background-color: #00c7e6;
      color: #fff;
    }
    &:hover {
      color: black;
      fill: black;
    }
  }
  &__icon {
    margin-right: 10px;
  }
}
.modal-fade-enter, .modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity .5s ease;
}
</style>
