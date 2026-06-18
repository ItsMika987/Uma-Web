<script lang="ts">
	import { scoutedSupports } from '$lib/stores/game';

	export let onBack: (() => void) | undefined = undefined;

	const typeColors: Record<string, string> = {
		Speed: '#4aa3ff',
		Stamina: '#ff6b6b',
		Power: '#ff9f43',
		Guts: '#ff6b9d',
		Wit: '#a29bfe',
		Friend: '#55efc4'
	};
</script>

<div class="container">
	<h1 class="title">Support Card List</h1>

	<div class="grid">
		{#each $scoutedSupports as card (card.id)}
			<div class="card rarity-{card.rarity}">
				<div
					class="type-badge"
					style="background: {typeColors[card.type]}22; color: {typeColors[
						card.type
					]}; border-color: {typeColors[card.type]}44"
				>
					{card.type}
				</div>
				<div class="name">{card.name}</div>
				<div class="character">{card.character}</div>
				<div
					class="rarity-label"
					style="color: {card.rarity === 3 ? '#9B30FF' : card.rarity === 2 ? '#FFC700' : '#888'}"
				>
					{card.rarity === 3 ? 'SSR' : card.rarity === 2 ? 'SR' : 'R'}
				</div>
			</div>
		{/each}
	</div>

	<button class="back-btn" on:click={onBack}>Back</button>
</div>

<style>
	.container {
		width: 100%;
		max-width: 700px;
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

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
	}

	.card {
		background: var(--box-bg);
		border-radius: 10px;
		padding: 12px 10px;
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

	.type-badge {
		display: inline-block;
		font-size: 0.7rem;
		padding: 2px 8px;
		border-radius: 999px;
		border: 1px solid var(--box-border);
		margin-bottom: 6px;
	}

	.name {
		font-weight: 600;
		font-size: 0.85rem;
		line-height: 1.3;
		margin-bottom: 3px;
	}

	.character {
		font-size: 0.75rem;
		opacity: 0.6;
		margin-bottom: 4px;
	}

	.rarity-label {
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.05em;
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
