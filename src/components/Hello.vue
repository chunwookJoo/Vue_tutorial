<template>
  <h1>HELLO</h1>
  <slot :hello="123"></slot>
  <slot name="fuckyou">
    Fuck You
  </slot>
</template>

<script>
export default {
	props:{
		updateMsg:{
			type:String,
			default:""
		},
	},
	emits:{
		click:null,
	}
}
</script>

<style scoped lang="scss">
$color: orange;
h1 {
  color: $color;
}
</style>
