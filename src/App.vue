<template>
  <div v-if="!isEdit">
    <button @click="onEdit">
      Edit
    </button>
  </div>
  <div>
    <input
      ref="editor"
      v-model="msg"
      type="text"
      @keyup.enter="isEdit=false" />
  </div>
</template>

<script>
import Hello from "~/components/Hello"
export default {
  data() {
    return {
			isEdit:false,
			msg:"hello"
    }
  },
	methods:{
		onEdit() {
			this.isEdit = true
			this.$nextTick(() => {
				this.$refs.editor.focus()
			})
		}
	}
}
</script>
