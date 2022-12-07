<template>
  <h1>
    Hello.vue
  </h1>
	<div >{{ count }}</div>
	<div >{{ message }}</div>
	<div >{{ reversedMessage }}</div>
	<button @click="fetchTodo">Fetch Todo</button>
	<button @click="increaseCount">Increase</button>
	<button @click="doubleCount">Double</button>
	<h1>{{"msg : " + msg}}</h1>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
	computed: {
		...mapState(["msg"]),
		...mapState("count", [
			"count"
		]),
		...mapState("message", [
			"message"
		]),
		...mapGetters("message", [
			"reversedMessage"
		]),
		// count() {
		// 	return this.$store.state.count.count
		// },
		// message() {
		// 	return this.$store.state.message.message
		// },
		// reversedMessage() {
		// 	return this.$store.getters["message/reversedMessage"]
		// }
	},
	methods: {
		...mapMutations("count", [
			"increaseCount",
			"doubleCount"
		]),
		...mapActions("message", [
			"fetchTodo"
		]),
		// increaseCount() {
		// 	this.$store.commit("count/increaseCount")
		// },
		// doubleCount() {
		// 	this.$store.commit("count/doubleCount")
		// },
		// fetchTodo() {
		// 	this.$store.dispatch("message/fetchTodo")
		// }
	}
}
</script>