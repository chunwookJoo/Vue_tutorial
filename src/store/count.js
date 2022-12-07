export default {
	namespaced:true,
	state() {
		return {
			count:100
		}
	},
	mutations:{
		increaseCount(state) {
			state.count += 1
		},
		doubleCount(state) {
			state.count *= 2;
		}
	}
}