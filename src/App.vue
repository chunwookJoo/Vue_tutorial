<template>
	<RouterLink to="/">Home</RouterLink>
	<RouterLink to="/about">About</RouterLink>

	<button @click="logIn" v-if="!isLoggedIn">Log In</button>
	<button @click="logOut" v-else>Log Out</button>
	<RouterView/>
</template>

<script>

export default {
	computed: {
		isLoggedIn() {
			return this.$store.state.user.isLoggedIn
		}
	},
	created() {
		this.$store.dispatch("user/initialize")
	},
	methods:{
		logIn() {
			this.$router.push("/login")
		},

		logOut() {
			this.$store.dispatch("user/logOut")
		}
	}
}
</script>
