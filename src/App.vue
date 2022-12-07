<template>
  <Hello />
  <World />
	<button @click="fetchTodo">Update Msg</button>
	<h1>store : {{storeMsg}}</h1>
	<h1>store module : {{storeMessage}}</h1>
</template>

<script>
import Hello from "~/components/Hello"
import World from "~/components/World"

export default {
	components:{
		Hello,
		World
	},
	computed: {
		storeMsg() {
			return this.$store.state.msg
		},
		storeMessage() {
			return this.$store.state.message.message
		}
	},
	methods: {
		fetchTodo() {
			this.$store.dispatch("fetchTodo")
		}
	}
}
</script>
