<template>
  <div>
    <h3>{{ title }}</h3>
    <!-- eslint-disable -->
    <input
      :value="modelValue"
      type="text"
      @input="$emit('update:modelValue', $event.target.value)" />
		<!-- eslint-enable -->
  </div>
</template>

<script>
	import fieldMixin from "./mixins"
	export default {
		mixins:[fieldMixin]
		// props: {
		// 	title: {
		// 		type:String,
		// 		default:""
		// 	},
		// 	modelValue: {
		// 		type:String,
		// 		default:""
		// 	}
		// },
		// emits:["update:modelValue"]
	}
</script>