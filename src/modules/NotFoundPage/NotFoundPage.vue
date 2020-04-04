<template>
    <div>
        not found page
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$refs, this.$refs.test)
        this.$refs['test'].outerHTML = "<script>alert(1)</"+"script>"
    },
    data() {
        return {
            username: 'asdasddasd'
        }
    }
}
</script>