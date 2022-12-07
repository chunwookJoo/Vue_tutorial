import { createStore } from 'vuex'
import message from "./message"
import count from "./count"

export default createStore({
	state() {
		return {
			msg:"HI Vue",
			count:1
		}
	},
	getters:{
		reversedMsg(state) {
			return state.msg.split("").reverse().join("")
		}
	},
	mutations:{
		increaseCount(state) {
			state.count += 1
		},
		updateMsg(state, newMsg) {
			state.msg = newMsg
		}
	},
	actions:{
		// async fetchTodo({commit}) {
		// 	const todo = await	fetch("https://jsonplaceholder.typicode.com/todos/1")
		// 	.then(res =>  res.json())
		// 	console.log(todo)
		// 	commit("updateMsg", todo.title)
		// }
	},
	modules:{
		message,
		count
	}
})