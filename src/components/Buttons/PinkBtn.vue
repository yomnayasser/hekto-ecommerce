<template>
    <div class="btn">
        <p>{{name}}</p>
    </div>
</template>

<script>
    export default {
        props:['name']
    }
</script>

<style scoped>
.btn{
    width: 163px;
    height:50px;
    border: 1px solid #FB2E86;
    background-color: #FB2E86;
    color:#fff;
     font-family: "Josefin Sans";
}
</style>