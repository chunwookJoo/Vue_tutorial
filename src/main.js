import { createApp } from "vue"
import App from "./App.vue"
import fetchPlugin from "~/plugins/fetch"

const app = createApp(App)
app.use(fetchPlugin, {
	pluginName:'$myApi'
})
app.mount("#app")
