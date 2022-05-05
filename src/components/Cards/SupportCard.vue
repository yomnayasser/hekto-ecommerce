<template>
    <div class="container">
        <div class="data">
            <img :src="img" class="img">
            <p class="title">{{name}}</p>
            <p class="desc">{{desc}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props:['name','desc','img']
    }
</script>

<style scoped>
.container{
    width:270px;
    height: 320px;
    box-shadow: 0 0 10px #c0c0c0;
    margin: 10px;
}
.data{
    width: 217px;
    height: 217px;
    margin: auto;
    
}
.img{
    width:65px;
    height: 65px;
    margin-top: 70px;
}
.title{
 color: #151875;
  font-weight: 700;
  font-family: "Josefin Sans";
}
.desc{
 
color:#1A0B5B4D;

}
</style>