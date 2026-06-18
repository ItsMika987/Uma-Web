<script lang="ts">
	import EnhanceContent from '$lib/ui/EnhanceContent.svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
</script>

<div class="page">
	<EnhanceContent />
	<div class="back-row">
		<button class="back-btn" on:click={() => goto(resolve('/home'))}>Home</button>
	</div>
</div>

<style>
	.page {
		width: 100%;
		min-height: 100vh;
		box-sizing: border-box;
	}

	.back-row {
		display: flex;
		justify-content: center;
		padding: 0 20px 2rem;
	}

	.back-btn {
		padding: 0.8rem 1.5rem;
		font-size: clamp(0.9rem, 3vw, 1rem);
		border-radius: 12px;
		cursor: pointer;
		transition:
			background 0.15s,
			border-color 0.15s,
			transform 0.1s;
		touch-action: manipulation;
		border: 1px solid var(--box-border);
		background: var(--button-bg);
		color: var(--button-text);
		font-family: monospace;
	}

	.back-btn:hover {
		background: var(--button-hover);
		border-color: var(--button-border-hover);
		transform: scale(1.03);
	}
</style>
