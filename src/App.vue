<template>
    <div class="main"> 
        this is Vue
    </div>
</template>
 
<script>
import img from './assets/image/goodsimg.png';
import './assets/image/7.svg'
import './assets/style/main.css'
import './assets/style/global.styl';

export default {
    name:'App',
    data(){
        return {
            persons: {

                name: "岚枫秋秋",

                age: '29'
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
h1
  color: red
</style>