<template>
    <div id="page">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './Header/Header'
import Footer from './Footer/Footer'
export default {
    components: {
        Header, Footer
    }
}
</script>
<style lang="scss" scoped>
</style>