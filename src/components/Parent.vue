<template>
  <h1>
    parent!
  </h1>
  <Child />
</template>

<script>
import Child from "~/components/Child"
export default {
		components: {
			Child
		}
	}
</script>