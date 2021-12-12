<template>
<div>
    <Header />
    <CategoriesArticlesPc />
    <Nuxt />
</div>
</template>

<script>
export default {
    middleware: ['checkState'],
}
</script>