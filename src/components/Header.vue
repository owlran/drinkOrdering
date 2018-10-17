<template lang='pug'>
  .header
    .header__title
      img(src="../assets/drink.png")
      span 來喝飲料囉！
    .header__right
      .header__amount
        span 總金額 {{ totalAmount }}
      .header__button(@click="$emit('addDrink')")
        span 訂飲料
</template>

<script>
export default {
  name: 'Header',
  props: {
    totalAmount: {
      type: Number,
    },
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
    margin-left: 270px;
    span {
    color: $title-text-color;
    font-size: $title-text-font-size;
    margin-left: 20px;
    }
  }
  &__right {
    position: absolute;
    top: 25%;
    right: 0;
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
    display: inline-block;
    background-color: #fff;
    padding: 13px 36px 13px 62px;
    border-radius: 3px;
    background-color: #00c7e6;
    color: white;
    span {
      font-size: 14px;
    }
  }
}
</style>
