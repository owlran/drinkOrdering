<template>
  <div class="header">
    <div class="header__title">
      <img src="../assets/drink.png" alt="">
      <span>來喝飲料囉 !</span>
    </div>
    <div class="header__right">
      <div class="header__amount">
        <span>總金額 {{ totalAmount | currency }}</span>
      </div>
      <div class="header__button" @click="$emit('addDrink')">
        <cafe-icon class="header__icon"/>
        <span>訂飲料</span>
      </div>
    </div>
  </div>
</template>

<script>
import cafeIcon from 'vue-ionicons/dist/md-cafe';

export default {
  name: 'Header',
  props: {
    totalAmount: {
      type: Number,
    },
  },
  components: {
    cafeIcon,
  },
};
</script>

<style scoped lang="scss">
$title-text-color: #00c7e6;
$title-text-font-size: 30px;

.header {
  background-color: #fff;
  position: relative;
  padding-top: 35px;
  padding-bottom: 40px;

  &__title {
    display: inline-flex;
    align-items: center;

    span {
      color: $title-text-color;
      font-size: $title-text-font-size;
      margin-left: 20px;
    }
  }
  &__right {
    position: absolute;
    top: 3em;
    right: 10px;
  }
  &__amount {
    display: inline-block;
    margin-right: 30px;
    span {
      font-size: 20px;
      color: #ff5230;;
    }
  }
  &__button {
    display: inline-flex;
    background-color: #fff;
    border-radius: 3px;
    background-color: #00c7e6;
    color: white;
    padding: 13px 36px 13px 37px;
    span {
      font-size: 14px;
    }
    &:hover {
      background-color: #00ddff;
      cursor: pointer;
    }
  }
  &__icon {
    fill: #fff;
    margin-right: 10px;
  }
}
</style>
