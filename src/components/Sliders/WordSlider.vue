<template>
    <span class="slider">{{title}}</span>
</template>

<script>
    export default {
        props:['title']
    }
</script>

<style scoped>
.slider{
    color:#151875;
   font-family: "Josefin Sans";
   font-weight: 400;
   margin-left:50px;
   margin-top:0;
}
.slider:active{
    color:#FB2E86;
   text-decoration: underline;
}
.slider:hover{
    color:#FB2E86;
   text-decoration: underline;
}
</style>