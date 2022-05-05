<template>
  <div class="card">
    <div class="imgContainer">
      <div class="icons">
        <fa icon="cart-shopping" class="icon" :style="{ color: '#2F1AC4' }" />
        <fa icon="heart" class="icon" :style="{ color: '#1389FF' }" />
        <fa icon="search-plus" class="icon" :style="{ color: '#1389FF' }" />
      </div>
      <img :src="image" :alt="image" class="img" />
      <p class="details">View Details</p>
    </div>
    <h3>{{ name }}</h3>
    <div class="colorpicker">
      <div v-for="color in colors" :key="color">
        <div class="color" :style="{ background: color }"></div>
      </div>
    </div>
    <h4 class="code">Code-{{ code }}</h4>
    <h4>${{ price }}</h4>
  </div>
</template>

<script>
export default {
  props: ["name", "colors", "code", "price", "image"],
  watch: {
    image(val) {
      this.image = val;
    },
  },
};
</script>

<style scoped>
.card {
  width: 270px;
  height: 361px;
  box-shadow: 0 0 10px #c0c0c0;
  margin: 10px;
  font-family: "Josefin Sans";
  border-radius: 10px;
  position: relative;
}

.imgContainer {
  background-color: #f6f7fb;
  height: 236px;
  display: flex;
  justify-content: center;
}
.img {
  display: block;
  margin: auto;
  height: 175px;
  width: 178px;
}
.colorpicker {
  display: flex;
  justify-content: center;
}
.color {
  height: 4px;
  width: 14px;
  margin-left: 5px;
  border-radius: 5px;
}
h3 {
  margin-bottom: 10px;
  color: #f701a8;
}
h4 {
  margin: 10px;
  color: #00009d;
  font-weight: 400;
}
.code {
  color: #151875;
  font-weight: 500;
  font-family: "Josefin Sans";
}
.details {
  display: none;
}
.icons {
  /* widows: 100%; */
  display: none;
}
.icon {
  padding-left: 12px;
  width: 15px;
  height: 15px;
}
.card:hover {
  background-color: #2f1ac4;
}
.card:hover h4,
.card:hover h3 {
  color: #fff;
}
.card:hover .img {
  height: 150px;
  width: 130px;
}
.card:hover .imgContainer {
  background-color: #f6f7fb;
  height: 236px;
  display: block;
  padding-top: 50px;
  box-sizing: border-box;
}
.card:hover .details {
  background-color: #08d15f;
  color: #fff;
  display: flex;
  justify-content: center;
  width: 94px;
  height: 24px;
  text-align: center;
  padding-top: 6px;
  box-sizing: border-box;
  font-size: 12px;
  border-radius: 2px;
  margin: auto;
}
.card:hover .icons {
  display: flex;
  position: absolute;
  top: 10px;
}
</style>
