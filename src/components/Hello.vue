<template>
  <Modal
    v-model="isShow"
    closeable>
    <template #activator>
      <h1>Hello</h1>
    </template>
    <h3>App.vue</h3>
    <textarea
      ref="editor"
      v-model="msg"></textarea>
    <button @click="submit">
      submit
    </button>
  </Modal>
</template>

<script>
export default {
	data() {
		return {
			msg:"내용을 입력하세요.",
			isShow:false
		}
	},
	watch: {
		isShow(newValue) {
			if(newValue) {
				this.$nextTick(() => {
					this.$refs.editor.focus()
				})
			}
		}
	},
	methods: {
		submit() {
			console.log(this.msg)
		}
	}
}</script>


<style scoped lang="scss">
$color: orange;
h1 {
  color: $color;
}

textarea {
	width: 100%;
	height: 100px;
	box-sizing: border-box;
}
</style>
