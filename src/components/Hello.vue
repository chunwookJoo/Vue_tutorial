<template>
  <h1 ref="hello">
    {{ msg }}
  </h1>
  <h2>{{ count }}</h2>
</template>

<script>
import sampleMixin from  "~/mixins/sample"

export default {
	mixins: [sampleMixin]
}
</script>
<style scoped lang="scss">
$color: orange;
h1 {
  color: $color;
}
</style>
