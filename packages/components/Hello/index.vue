<template>
<h1 v-bind="$attrs">Hello {{ msg }}!</h1>
</template>

<script lang="ts" setup name="Hello" :inheritAttrs="false">
const { msg } =  defineProps<{ msg: string }>()

</script>


<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'Hello',
 
});
</script>

<style lang="scss">
h1{
	color: red;
}
</style>