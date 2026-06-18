<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	function goBack() {
		goto(resolve('/'));
	}
</script>

<div class="page">
	<div class="container">
		<div class="code">{$page.status}</div>
		<p class="sub">{$page.error?.message ?? ''}</p>
		<h1 class="message">
			{#if $page.status === 404}
				This page took a wrong turn on the track...
			{:else}
				Something went wrong at the finish line..
			{/if}
		</h1>
		<div class="btns">
			<button class="soon-btn" on:click={goBack}>Back</button>
		</div>
	</div>
</div>

<style>
	.page {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bg);
		font-family: monospace;
		box-sizing: border-box;
		overflow: hidden;
	}

	.container {
		text-align: center;
		max-width: 400px;
		width: 100%;
	}

	:global(html),
	:global(body) {
		overflow: hidden;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	.code {
		font-size: clamp(5rem, 20vw, 8rem);
		font-weight: 700;
		color: var(--text);
		line-height: 1;
		margin-bottom: 8px;
		letter-spacing: -0.04em;
		opacity: 0.15;
	}

	.message {
		font-size: clamp(1rem, 4vw, 1.1rem);
		color: var(--text);
		margin: 0 0 8px;
		line-height: 1.5;
	}

	.sub {
		font-size: 0.85rem;
		color: var(--text);
		opacity: 0.45;
		margin: 0 0 28px;
		min-height: 1em;
	}

	.btns {
		display: flex;
		gap: 10px;
		justify-content: center;
		flex-wrap: wrap;
	}

	.soon-btn {
		padding: 12px 24px;
		font-size: 1rem;
		font-family: monospace;
		font-weight: 600;
		border-radius: 12px;
		cursor: pointer;
		border: 1px solid var(--box-border);
		background: var(--button-bg);
		color: var(--button-text);
		transition:
			background 0.15s,
			transform 0.1s;
	}

	.soon-btn:hover {
		background: var(--button-hover);
		border-color: var(--button-border-hover);
		transform: scale(1.03);
	}

	.soon-btn:active {
		transform: scale(0.97);
	}
</style>
