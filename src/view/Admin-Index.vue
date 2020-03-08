<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "./Admin-Header/Header"
import Footer from "./Admin-Footer/Footer"
export default {
    components: {Header,Footer}
}
</script>