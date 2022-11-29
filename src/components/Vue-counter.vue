<template>
	<div class="vue-story">
		<h1>{{ state.count }}</h1>
		<button @click="increment">Increment</button>
	</div>
</template>

<script setup>
import { reactive, defineProps } from 'vue'
const props = defineProps({
	count: {
		type: Number,
		default: 0,
	},
})

const state = reactive(props)

function increment() {
	state.count++
}
</script>
