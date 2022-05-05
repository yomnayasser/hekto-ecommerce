<template>
    <div class="header">
        <p>{{title}}</p>
    </div>
</template>

<script>
    export default {
        props:['title']
        
    }
</script>

<style scoped>
.header{
     font-family: "Josefin Sans";
     color:#0D0E43;
     font-weight: bold;
     font-size: 40px;
}
</style>