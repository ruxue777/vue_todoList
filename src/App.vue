<template>
    <div> 

    <ul>
        <li v-for="(val, key, index) in persons" :key="index"> {{ persons.index }} - {{ person.key }}- {{ persons.val }} </li>
    </ul>

    </div>

</template>
 
<script>
import img from './assets/image/goodsimg.png'

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

<style>

</style>