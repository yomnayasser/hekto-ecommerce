<template>
    <div class="main">
        <div class="logo">
            <p>Hteko</p>
        </div>
        
        <div class="tabs">
            <span>Home</span>
            <span>Pages</span>
            <span>Products</span>
            <span>Blog</span>
            <span>Shop</span>
            <span>Contact</span>
        </div>
        <div class="search">
            <input type="text" class="input"><fa icon="search" class="icon"/>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.main{
    height: 80px;
    display: flex;
     font-family: "Josefin Sans";
     color:#0D0E43;
     justify-content: space-evenly;
       text-align: center;
        box-sizing: border-box;
        width:100%;

}
.logo{
    font-weight:700 ;
    font-size: 25px;
    margin-top: 5px;
   
 
}
.tabs{
    margin-top:30px;
}
.tabs span{
    padding-right: 10px;
    font-size: 15px;
}
.tabs span:hover{
   color:#FB2E86
}
.search{
    margin-top: 25px;
    position: relative;
}
.icon{
    color:#fff;
    height: 20px;
    width:30px;
    display: inline-block;
    background-color: #FB2E86;
      padding-top: 5px;
      position: absolute;

}
.input{
    height: 20px;
    border:none;
    border:2px solid #E8E8E8;
}
</style>