<template>
	<h1>로그인하세요</h1>
	<form @submit.prevent>
		<div>

			<input type="text" v-model="userID" placeholder="아이디">
		</div>
		<div>
			
			<input type="password" v-model="userPW" placeholder="비밀번호">
		</div>
		<button @click="login">로그인</button>
	</form>
</template>

<script>
	export default {
		data() {
			return  {
				userID:"",
				userPW:""
			}
		},
		methods:{
			login() {
				this.$store.dispatch("user/logIn", {
					id: this.userID,
					pw: this.userPW
				})
			}
		}
	}
</script>