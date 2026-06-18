<script lang="ts">
	import { scoutedTrainees, unscoutedTrainees } from '$lib/stores/game';

	export let onBack: (() => void) | undefined = undefined;
</script>

<div class="container">
	<h1 class="title">Trainee Umamusume</h1>

	<h2 class="section-title">Scouted</h2>
	<div class="grid">
		{#each $scoutedTrainees as uma (uma.id)}
			<div class="card rarity-{uma.rarity}">
				<div class="name">{uma.name}</div>
				<div class="stars">{'★'.repeat(uma.rarity)}</div>
			</div>
		{/each}
	</div>

	<h2 class="section-title">Unscouted</h2>
	<div class="grid">
		{#each $unscoutedTrainees as uma (uma.id)}
			<div class="card locked">
				<div class="name">{uma.name}</div>
				<div class="stars">{'★'.repeat(uma.rarity)}</div>
			</div>
		{/each}
	</div>

	<button class="back-btn" on:click={() => onBack?.()}>Back</button>
</div>

<style>
	.container {
		width: 100%;
		max-width: 640px;
		margin: 0 auto;
		padding: 0 20px;
		box-sizing: border-box;
		text-align: center;
	}

	.title {
		font-size: 2rem;
		font-weight: 700;
		color: var(--text);
		margin: 0 0 24px;
		text-align: center;
	}

	.section-title {
		margin: 32px 0 12px;
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--text);
		text-align: center;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
	}

	.card {
		background: var(--box-bg);
		border-radius: 10px;
		padding: 14px 10px;
		color: var(--text);
		border: 2px solid #333;
		text-align: center;
		word-break: break-word;
	}

	.rarity-1 {
		border-color: #555;
	}
	.rarity-2 {
		border-color: #ffc700;
	}
	.rarity-3 {
		border-color: #9b30ff;
	}

	.locked {
		opacity: 0.35;
		filter: grayscale(100%);
	}

	.name {
		font-weight: 600;
		margin-bottom: 6px;
		font-size: 0.95rem;
		line-height: 1.3;
	}

	.stars {
		color: gold;
		font-size: 1.1rem;
	}

	.back-btn {
		padding: 0.8rem 1.5rem;
		font-size: clamp(0.9rem, 3vw, 1rem);
		border-radius: 12px;
		cursor: pointer;
		margin-top: 28px;
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
