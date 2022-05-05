<template>
  <div class="main">
    <div class="imgContainer">
      <img class="imgSale" src="../../assets/Sale.png" />
      <img :src="image" :alt="image" class="img" />
      <div class="icons">
        <div class="iconContainer">
          <fa icon="cart-shopping" class="icon" />
        </div>
        <div class="iconContainer">
          <fa icon="heart" class="icon" />
        </div>
        <div class="iconContainer">
          <fa icon="search-plus" class="icon" />
        </div>
      </div>
    </div>
    <div class="data">
      <div>
        <span class="name">{{ name }}</span>
      </div>
      <div>
        <span class="price">${{ price }}</span>
        <span class="sale">${{ sale }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "price", "sale","image"],
};
</script>

<style scoped>
.main {
  width: 360px;
  height: 306px;
  margin: 10px;
}
.img {
  width: 223px;
  height: 229px;
  margin: auto;
}
.imgContainer {
  display: flex;
  justify-content: center;
  background-color: #eeeffb;
  width: 360px;
  height: 270px;
  position: relative;
}
.data {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
.name {
  color: #151875;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 2px solid #eeeffb;
}
.price {
  color: #151875;
  font-size: 14px;
  font-weight: 600;
}
.sale {
  color: #fb2448;
  font-size: 12px;
  text-decoration: line-through;
  padding: 0 5px;
  font-weight: 600;
}
.imgSale {
  display: none;
}
.icons {
  display: none;
}
.icon {
  width: 17px;
  height: 17px;
  display: block;
  margin: auto;
  color: #2f1ac4;
  background: #fff;
  margin:20px;
}
/* .iconContainer {
 width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  margin: 10px;
 background: #EEEFFB;
} */
.icon:hover{
  background: #EEEFFB;
  padding:10px;
  border-radius: 50%;
}
.imgContainer:hover {
  background-color: #fff;
}
.imgContainer:hover .imgSale {
  width: 85px;
  height: 57px;
  position: absolute;
  top: 20px;
  left: 5px;
  display: flex;
}
.imgContainer:hover .icons {
  position: absolute;
  left: 5px;
  bottom: 20px;
  display: table;
}
</style>
