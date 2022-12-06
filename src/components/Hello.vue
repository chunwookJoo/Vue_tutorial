<template>
  <h1 @click="$emit('please', 9)">
    Please
  </h1>
  <h1 @click="$emit('click')">
    click
  </h1>
</template>

<script>
export default {
	props:{
		message:{
			type:String,
			default:""
		},
	},
	emits:{
		click:null,
		please: (number) => {
			if(number > 10) {
				return true
			} else {
				console.log("10보다 작음")
				return false
			}
		}
	}
}
</script>

<style scoped lang="scss">
$color: orange;
h1 {
  color: $color;
}
</style>
