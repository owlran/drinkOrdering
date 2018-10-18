<template>
  <div class="order">
    <div class="order__drink">
      <span>{{ order.drink }}</span>
    </div>
    <div class="order__price">
      <span>{{ order.price | currency }}</span>
    </div>
    <div class="order__tag order__tag--sugar">
      <span>{{ order.sugar }}</span>
    </div>
    <div class="order__tag order__tag--ice">
      <span>{{ order.ice }} </span>
    </div>
    <div class="order__name">
      <span>{{ order.name }}</span>
    </div>
    <div class="order__notes">
      <span>{{ order.notes }}</span>
    </div>
    <div class="order__icon order__icon--edit" @click="editHandler">
      <edit-icon w="15px" h="15px"/>
    </div>
    <div class="order__icon order__icon--delete" @click="deleteHandler">
      <trash-icon w="15px" h="15px"/>
    </div>
  </div>
</template>

<script>
import editIcon from 'vue-ionicons/dist/md-create';
import trashIcon from 'vue-ionicons/dist/md-trash';

export default {
  name: 'Order',
  data() {
    return {
    };
  },
  components: {
    editIcon,
    trashIcon,
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
      this.$emit('editOrder', this.index);
    },
    editingHandler() {
    },
  },
};
</script>

<style scoped lang="scss">
.order {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 35px;

   &__drink {
     width: 160px;
     span {
       font-size: 20px;
       color: #000;
     }
   }
   &__price {
     width: 48px;
     margin-right: 30px;
     span {
       font-size: 20px;
       color: #ff5230;
     }
   }
   &__tag {
    line-height: 30px;
    width: 50px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;

    border-radius: 3px;
    margin-right: 20px;
    &:nth-of-type(odd) {
      margin-right: 10px;
    }
     span {
      font-size: 14px;
      color: #fff;
      vertical-align: middle;
     }
     &--ice {
       background-color:#ffab00;
     }
     &--sugar {
       background-color:#00a3bf;
     }
   }
   &__name {
     width: 112px;
     margin-right: 20px;
     span {
      color: #888;
      font-size: 14px;
      vertical-align: middle;
     }
   }
   &__notes {
     width: 200px;
     margin-right: 68px;
     span {
       font-size: 14px;
       color: #888;
     }
   }
   &__icon {
     fill: #d3d3d3;
     &:nth-of-type(odd) {
       margin-right: 10px;
     }
     &:hover {
       fill: rgb(108, 105, 105);
       cursor: pointer;
     }
   }
}
</style>
