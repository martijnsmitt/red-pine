<template>
    <div>
        Gallery: {{ slug }}
    </div>
</template>
<script>
export default {
    name: 'Gallery',
    created() {
        this.slug = this.$route.params.slug
    }
}
</script>