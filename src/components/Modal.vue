<template lang='pug'>
  transition(name="modal-fade")
    .modal(@click="close" v-show="isModalVisible")
      .modal__wrapper(@click.stop)
        .modal__header
          slot(name="header")
            h2 the header of modal
          button.modal__btn(type="button" @click="close") x
        .modal__content
          slot(name="content")
            span the content of modal
        .modal__footer
          slot(name="footer")
            button.modal__btn.modal__btn--cancel(type="button" @click="close")
              closeIcon.modal__icon(w="15" h="15")
              span 取消返回
            button.modal__btn.modal__btn--confirm(type="button" @click="confirm")
              checkIcon.modal__icon(w="15" h="15")
              span 確認送出
</template>

<script>
import checkIcon from 'vue-ionicons/dist/md-checkmark.vue';
import closeIcon from 'vue-ionicons/dist/md-close.vue';

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
    border-top: 1px solid #eee;
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
