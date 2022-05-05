<template>
  <div class="main">
    <div class="data">
      <span><fa icon="envelope" class="icon" />hetko_ecommerce@gmail.com</span>
      <span><fa icon="phone" class="icon" />(12345)67890</span>
    </div>
    <div class="user">
      <span>English <fa icon="angle-down" class="icon" /></span>
      <span>USD <fa icon="angle-down" class="icon" /></span>
      <span>Login <fa icon="user" class="icon" /></span>
      <span>Wishlist <fa icon="heart" class="icon" /></span>
      <fa icon="cart-shopping" class="cart" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  background-color: #7e33e0;
  height: 44px;
  width: 100%;
  display: flex;
  color: #fff;
  justify-content: space-around;
  font-family: "Josefin Sans";
  font-weight: 400;
}
.data,
.data span,
.user {
  padding: 10px 20px;
  font-size: 12px;
}
.user span {
  padding-right: 10px;
}
.icon {
  padding: 8px 8px 0 0;
  font-size: 12px;
}
</style>
