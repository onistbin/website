<template>
<div id="app">
    <el-container>
        <el-header>
            <head-menu></head-menu>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</div>
</template>

<script>
import '../static/css/common/reset.css'
import HeadMenu from './components/HeadMenu'
export default {
    name: 'App',
    components: {
        HeadMenu
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0px;
    padding: 0px;
}
</style>
