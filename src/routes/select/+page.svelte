<script lang="ts">
	import { scoutedTrainees } from '$lib/stores/game';
	import { selectedUma } from '$lib/umaStore';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	let currentSelection: string | null = null;

	function selectUma(name: string) {
		currentSelection = name;
		selectedUma.set(name);
	}

	function startRace() {
		if (currentSelection) goto(resolve('/race'));
	}

	function goBack() {
		goto(resolve('/home'));
	}
</script>

<div class="wrapper">
	<h1>Select Your Uma</h1>

	{#if $scoutedTrainees.length === 0}
		<p class="empty">You haven't scouted any Umamusume yet!<br />Head to Scout first.</p>
	{:else}
		<div class="grid">
			{#each $scoutedTrainees as uma (uma.id)}
				<button
					class="uma-btn rarity-{uma.rarity} {currentSelection === uma.name ? 'selected' : ''}"
					on:click={() => selectUma(uma.name)}
				>
					<span class="name">{uma.name}</span>
					<span class="stars">{'★'.repeat(uma.rarity)}</span>
				</button>
			{/each}
		</div>
	{/if}

	<div class="bottom-row">
		<button class="action-btn" on:click={goBack}>Home</button>
		<button class="action-btn {!currentSelection ? 'disabled' : ''}" on:click={startRace}
			>Race</button
		>
	</div>
</div>

<style>
	.wrapper {
		height: 100dvh;
		padding: 1.5rem;
		text-align: center;
		box-sizing: border-box;
		color: var(--text);
		overflow-y: auto;
		display: flex;
		flex-direction: column;
	}

	h1 {
		font-size: clamp(1.5rem, 5vw, 3rem);
		margin-bottom: 1rem;
		color: var(--text);
	}

	.empty {
		color: var(--text);
		opacity: 0.5;
		margin: 3rem auto;
		line-height: 1.8;
		font-size: 1.1rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 10px;
		max-width: 900px;
		margin: 0 auto 2rem;
	}

	.uma-btn {
		padding: 1rem 0.75rem;
		border-radius: 12px;
		cursor: pointer;
		background: var(--button-bg);
		color: var(--button-text);
		border: 2px solid var(--box-border);
		transition: 0.15s;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 4px;
		min-height: 60px;
		-webkit-tap-highlight-color: transparent;
		user-select: none;
	}

	.uma-btn:hover {
		background: var(--button-hover);
		border-color: var(--button-border-hover);
		transform: scale(1.03);
	}

	.rarity-2 {
		border-color: #ffc700;
	}
	.rarity-3 {
		border-color: #9b30ff;
	}

	.selected,
	.selected:hover {
		background: var(--selected-bg) !important;
		border-color: var(--selected-border) !important;
		transform: scale(1.03);
		box-shadow: 0 0 0 2px var(--selected-border);
	}

	.name {
		font-size: 0.95rem;
		font-weight: 600;
	}

	.stars {
		font-size: 0.85rem;
		color: gold;
	}

	.bottom-row {
		display: flex;
		justify-content: center;
		gap: 12px;
		margin-top: auto;
		padding-top: 1rem;
	}

	.action-btn {
		flex: 1;
		max-width: 260px;
		padding: 0.9rem 1.5rem;
		font-size: 1rem;
		border-radius: 12px;
		background: var(--button-bg);
		color: var(--button-text);
		border: 1px solid var(--box-border);
		cursor: pointer;
		transition: 0.15s;
		-webkit-tap-highlight-color: transparent;
	}

	.action-btn:hover {
		background: var(--button-hover);
		border-color: var(--button-border-hover);
		transform: scale(1.03);
	}

	.disabled {
		opacity: 0.4;
		pointer-events: none;
	}

	@media (max-width: 680px) {
		.wrapper {
			padding: 1rem;
		}

		.grid {
			grid-template-columns: 1fr;
		}

		.uma-btn {
			flex-direction: row;
			justify-content: space-between;
			padding: 1.1rem 1.25rem;
			min-height: 54px;
		}

		.name {
			font-size: 1rem;
		}

		.stars {
			font-size: 0.95rem;
		}

		.bottom-row {
			flex-direction: column;
			align-items: stretch;
			gap: 10px;
		}

		.action-btn {
			max-width: none;
			padding: 1.1rem 1.5rem;
			font-size: 1.1rem;
		}
	}
</style>
