<template>
    <div>
         <el-menu
            :default-active="activeIndex"
            :router="true"
            class="el-menu-nav"
            mode="horizontal"
            @select="handleSelect">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/login">消息队列</el-menu-item>
            <el-menu-item index="3">任务列表</el-menu-item>
            <el-menu-item index="4">处理中心</el-menu-item>
        </el-menu>
         <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                个人中心<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <div class="line"></div>
    </div>
</template>
<style>
.el-menu-nav {
    float: left;
}
.el-dropdown {
    float: right;
    margin-right: 50px;
}
.el-dropdown-link {
    float: right;
    margin-top: 25px;
}
</style>
<script>
export default {
    data () {
        return {
            activeIndex: '/'
        }
    },
    methods: {
        handleSelect (key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>
