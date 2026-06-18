<script lang="ts">
	let subTab: 'main' | 'trainee' | 'support' = 'main';

	import TraineeContent from './TraineeContent.svelte';
	import SupportCardContent from './SupportCardContent.svelte';

	function showTrainee() {
		subTab = 'trainee';
	}
	function showSupport() {
		subTab = 'support';
	}
	function showMain() {
		subTab = 'main';
	}
</script>

<div class="container">
	{#if subTab === 'main'}
		<h1 class="title">Enhance</h1>
		<div class="menu-buttons">
			<button class="menu-btn" on:click={showTrainee}>Trainee</button>
			<button class="menu-btn" on:click={showSupport}>Support Cards</button>
			<button class="menu-btn disabled">Veteran Umamusume - Soon</button>
		</div>
	{:else if subTab === 'trainee'}
		<TraineeContent onBack={showMain} />
	{:else if subTab === 'support'}
		<SupportCardContent onBack={showMain} />
	{/if}
</div>

<style>
	.container {
		width: 100%;
		max-width: 480px;
		margin: 0 auto;
		padding: 1rem 20px 2rem;
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
</style>
