<script lang="ts">
	import SupportCardListContent from './SupportCardListContent.svelte';

	export let onBack: (() => void) | undefined = undefined;

	let view: 'menu' | 'list' = 'menu';

	function showList() {
		view = 'list';
	}
	function showMenu() {
		view = 'menu';
	}
</script>

<div class="container">
	{#if view === 'menu'}
		<h1 class="title">Support Cards</h1>
		<div class="menu-buttons">
			<button class="menu-btn disabled">Level Up - Soon</button>
			<button class="menu-btn disabled">Uncap - Soon</button>
			<button class="menu-btn disabled">Deck - Soon</button>
			<button class="menu-btn disabled">Storage - Soon</button>
			<button class="menu-btn" on:click={showList}>List</button>
		</div>
		<div class="bottom-row">
			<button class="back-btn" on:click={onBack}>Back</button>
		</div>
	{:else}
		<SupportCardListContent onBack={showMenu} />
	{/if}
</div>

<style>
	.container {
		width: 100%;
		text-align: center;
		box-sizing: border-box;
	}

	.title {
		font-size: 2rem;
		font-weight: 700;
		color: var(--text);
		margin: 0 0 24px;
	}

	.menu-buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
		width: 100%;
		max-width: 320px;
		margin: 0 auto;
	}

	.menu-btn {
		padding: 1rem 2rem;
		font-size: clamp(1rem, 4vw, 1.2rem);
		border-radius: 12px;
		cursor: pointer;
		width: 100%;
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

	.menu-btn:hover {
		background: var(--button-hover);
		border-color: var(--button-border-hover);
		transform: scale(1.03);
	}

	.menu-btn:active {
		transform: scale(0.96);
	}

	.disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.bottom-row {
		margin-top: 2rem;
		display: flex;
		justify-content: center;
		width: 100%;
		max-width: 320px;
		margin-left: auto;
		margin-right: auto;
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
