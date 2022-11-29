<template>
	<div class="vue-story">
		<h1>{{ state.count }}</h1>
		<button @click="increment">Increment</button>
	</div>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue'
const state = reactive({ count: 1 })

function increment() {
	state.count++
}
</script>
