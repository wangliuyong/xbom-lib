<template>
<h1>Hello {{ msg }}!</h1>
</template>

<script lang="ts" setup name="Hello">
const { msg } =  defineProps<{ msg: string }>()

</script>

<style lang="scss">
h1{
	color: red;
}
</style>