<template>
    <div class="container">
        <img src="../../assets/Ad1.png" class="chair">
         <img src="../../assets/Ad2.png" class="bg">
         <div class="text">
             <h1>Unique Featuers Of leatest & Tredning Products</h1>
             <ul>
                 <li class="li1" v-for="desc in descrption" :key="desc" >{{desc}}</li>
             </ul>
         </div>
         <div class="btn">
            <PinkBtn name="Add To Cart"/>
         </div>
        <div class="info">
            <p :style="{ 'font-weight': 'bold' }">{{name}}</p>
            <p>{{price}}</p>
        </div>
    </div>
</template>

<script>
 import PinkBtn from "../Buttons/PinkBtn.vue";
    export default {
       props:['descrption','name','price'],
        components:{
            PinkBtn
        }
        
    }
</script>

<style scoped>
.container{
    margin-top:30px;
    width: 100%;
    height: 479px;
    background-color: #F2F0FF;
    position: relative;
}
.bg{
    width:367px;
    height: 350px;
    position:absolute;
    top:10%;
    left:20%;
}
.chair{
    position:absolute;
    top:5%;
    width:395px;
    height:450px;
    left:23%;
    z-index: 1;
}
.text{
    position: absolute;
    width:500px;
    height:82px;
    top:10%;
    right:17%;
    text-align: left;
}
.text ul{
    list-style: none;;
    color:#ACABC3
}
.li1::before{
     content: "\2022";  
  font-weight: bold;
  display: inline-block; 
  font-size: 25px; 
  margin-left: -1em;
  width:1em;
  color:#F52B70;
}
.li2::before{
     content: "\2022";  
  font-weight: bold;
  display: inline-block; 
  font-size: 25px; 
  margin-left: -1em;
  width:1em;
  color:#2B2BF5;
}
.li3::before{
     content: "\2022";  
  font-weight: bold;
  display: inline-block; 
  font-size: 25px; 
  margin-left: -1em;
  width:1em;
  color:#2BF5CC;
}
.btn{
    position: absolute;
    left:51%;
    bottom:20%;
}
.info{
      position: absolute;
    left:65%;
    bottom:20%;
}
.info p{
    margin:5px 0;
    padding:0;
    text-align: left;
    color:#151875;
    font-family: "Josefin Sans";
}
</style>