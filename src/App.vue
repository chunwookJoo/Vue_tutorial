<template>
  <h1 @click="slotName = 'fuckyou'">
    {{ msg }}
  </h1>
  <Hello>
    <template #default="{hello}">
      <h2>hELLO {{ hello }}</h2>
    </template>
    <template #[slotName]="{hello}">
      <h2>hELLO Bitch {{ helllo }}</h2>
    </template>
  </Hello>
</template>

<script>
import Hello from "~/components/Hello"
export default {
  components: {
    Hello,
  },
  data() {
    return {
			msg:"hello",
			slotName:"xyz"
    }
  },
}
</script>
