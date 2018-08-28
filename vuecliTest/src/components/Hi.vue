<template>
    <div id="hello">
        <h1>{{ msg }}</h1>
        
        <router-view class="aaa"></router-view>
    </div>
</template>
<script>
export default {
    name:'hi',
    data(){
        return{
            msg: 'Hi,I am Kaikai'
        }
    }
}
</script>
<style scoped>

</style>


