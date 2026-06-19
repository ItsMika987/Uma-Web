<div class="home">
	<div class="stat-bar">
		<div class="stat-row">
			<div class="stat">TP: <strong>&mdash;</strong></div>
			<div class="stat">RP: <strong>&mdash;</strong></div>
		</div>
		<div class="stat-row">
			<div class="stat">Monies: <strong>&mdash;</strong></div>
			<div class="stat">Carats: <strong>&mdash;</strong></div>
		</div>
	</div>

	<h1>Home</h1>

	<button class="career-banner disabled">
		<span class="badge">Career</span>
		<span class="banner-text">Coming soon</span>
	</button>
</div>

<style>
	.home {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 1rem 1rem 2rem;
		box-sizing: border-box;
		gap: 1rem;
		width: 100%;
	}

	h1 {
		margin: 0.5rem 0 0;
		font-size: clamp(1.5rem, 5vw, 2rem);
		color: var(--text);
	}

	.stat {
		font-size: 0.75rem;
		color: var(--text);
		opacity: 0.7;
	}

	.stat strong {
		color: var(--text);
		opacity: 1;
	}

	.stat-bar {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.2rem;
		align-self: center;
		padding: 0.5rem 1rem;
		background: var(--box-bg);
		border: 1px solid var(--box-border);
		border-radius: 10px;
		max-width: 480px;
		width: 100%;
		box-sizing: border-box;
	}

	.stat-row {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		width: 100%;
	}

	.stat strong {
		color: var(--text);
		opacity: 1;
	}

	.career-banner {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		width: 100%;
		max-width: 480px;
		padding: 12px 20px;
		background: var(--box-bg);
		border: 1px solid var(--box-border);
		border-radius: 12px;
		font-family: monospace;
		cursor: default;
		box-sizing: border-box;
	}

	.badge {
		background: var(--selected-bg);
		color: var(--selected-border);
		font-weight: 700;
		font-size: 0.75rem;
		padding: 2px 8px;
		border-radius: 6px;
		text-transform: uppercase;
	}

	.banner-text {
		color: var(--text);
		opacity: 0.5;
		font-size: 0.85rem;
	}

	.disabled {
		pointer-events: none;
		opacity: 0.6;
	}
</style>
