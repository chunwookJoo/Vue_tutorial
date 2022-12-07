<template>
	<RouterLink to="/">Home</RouterLink>
	<RouterLink to="/about">About</RouterLink>
	<RouterLink :to="{
		name:'docsId',
		params:{id:'777'},
		query:{name:'Leon', age:85, email:'leon@abc.com'}
		}">Docs Id
	</RouterLink>
	<button @click="$router.push({name:'home'})">Home</button>
	<button @click="$router.push({name:'about'})">About</button>
	<RouterView/>
</template>

<script>

export default {

}
</script>
