
<template>
    <div class="carousel">
      <!-- <div class="diamond"></div> -->
      <img src="../assets/Cursor1.png" class="lamp"/>
      <div class="circle1"></div>
      <div class="circle2"></div>
     <img src="../assets/Cursor2.png" class="chair"/>
     <div class="text">
     <p class="title1">Best Furniture For Your Castle....</p>
     <p class="title2">New Furniture Collection Trends in 2022</p>
    <p class="title3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed doloribus rem repellendus ratione dolorem quam!</p>

     </div>
     <PinkBtn name="Shop Now" class="btn"/>
     <div class="sliders">
       <div class="diamond" v-for="i in 4" :key="i"></div>
     </div>
    </div>
</template>

<script>
import PinkBtn from "../components/Buttons/PinkBtn.vue"
    export default {
        components:{
          PinkBtn
        }
    }
</script>

<style scoped>
.carousel{
    width: 100%;
    height: 652px;
    background-color: #F2F0FF;
    position: relative;
}
.lamp{
  position: absolute;
  width:357px;
  height: 357px;
  left:5px
}
.circle1{
    width: 551px;
  height: 551px;
  background: #ECD2FA5c;
  border-radius: 50%;
  position: absolute;
  right:5px;
  top:40px;
  
}
.circle2{
    width: 548px;
  height: 548px;
  background: #ECD2FA5c;
  border-radius: 50%;
  position:absolute;
  right:20px;
  top:60px;
}
.chair{
  width: 529px;
  height: 529px;
  top:80px;
  position: absolute;
  right: 30px;
}
.btn{
  position: absolute;
  left:23%;
  bottom: 30%;
}
.text{
  width:544px;
  height:248px;
  position:absolute;
  left:23%;
  top:20%
}
.title1{
  color:#FB2E86;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
}
.title2{
  font-size: 43px;
  color:#000;
  font-family: "Josefin Sans";
  font-weight: 700;
  text-align: left;
}
.title3{
  font-size: 16px;
  color:#8A8FB9;
  text-align: left;
}
.sliders{
  display:flex;
  position: absolute;
  bottom:5%;
  left:45%
}
.diamond {
 border:1px solid #FB2E86;
  height: 10px;
  text-align: center;
  transform:rotate(45deg);
	width:10px;
  margin:5px 10px;
}
.diamond:hover{
   background: #FB2E86;
}
  
</style>
