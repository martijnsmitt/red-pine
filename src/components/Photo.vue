<template>
    <div>
        Gallery: {{ slug }}
        <br/>Photo id: {{ id }}
    </div>
</template>
<script>
export default {
    name: 'Photo',
    created() {
        this.slug = this.$route.params.slug
        this.id = this.$route.params.id
    }
}
</script>