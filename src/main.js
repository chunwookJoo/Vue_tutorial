import { createApp } from "vue"
import App from "./App.vue"
import fetchPlugin from "~/plugins/fetch"
import Modal from "~/components/Modal"

const app = createApp(App)
app.use(fetchPlugin, {
	pluginName:'$myApi'
})
app.component("Modal", Modal)
app.mount("#app")
