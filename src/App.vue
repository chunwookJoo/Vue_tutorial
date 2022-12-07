<template>
  <div style="transform:scale(1)">
    <Modal
      v-model="isShow"
      closeable>
      <template #activator>
        <button>on modal</button>
      </template>
      <h3>App.vue</h3>
    </Modal>
    <Hello />
  </div>
</template>

<script>
import * as FieldComponents from "~/components/fields/index.js"
import Hello from "~/components/Hello"

export default {
	components:{
		Hello,
		...FieldComponents,
	},
  data() {
    return {
			isShow:false
    }
  },
	created() {
		this.init()
	},
	methods:{
		async init() {
		const res = await this.$myApi("https://www.omdbapi.com?apikey=7035c60c&s=frozen&page=3")
			console.log(res)
		},
		submit() {
			const results = this.fields.map(({title, value}) => ({
				title, value
			}) )
			console.log(results)
		}
	}
}
</script>
