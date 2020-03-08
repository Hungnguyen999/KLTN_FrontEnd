<template>
    <div>
        <div v-if="$route.meta.typeAccount==2">Footer IT</div>
        <div v-if="$route.meta.typeAccount==1">Footer Employee</div>
    </div>
</template>
<script>
export default {
    created() {
        console.log(this.$route.meta)
    }
}
</script>