<template>
<div class="slider">

</div>
</template>


<script>
export default {
    props:['className'],
}
</script>

<style scoped>
.slider {
  width: 16px;
  height: 4px;
  background-color: #febad7;
  border-radius: 10px;
  margin: 5px;
}
.slider:hover
{
    width: 24px;
  background-color: #fb2e86;  
}
.slider:active
{
    width: 24px;
  background-color: #fb2e86; 
}
</style>

