<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	import HomeContent from '$lib/ui/HomeContent.svelte';
	import ScoutContent from '$lib/ui/ScoutContent.svelte';
	import EnhanceContent from '$lib/ui/EnhanceContent.svelte';

	type Tab = 'enhance' | 'story' | 'home' | 'race' | 'scout';

	let activeTab: Tab = 'home';
	let menuOpen = false;

	function switchTab(tab: Tab) {
		if (tab === 'race') {
			goto(resolve('/select'));
			return;
		}
		activeTab = tab;
		menuOpen = false;
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	function goToSettings() {
		menuOpen = false;
		goto(resolve('/settings'));
	}

	function goToTitle() {
		menuOpen = false;
		goto(resolve('/'));
	}
</script>

<div class="layout">
	<div class="main-area">
		<div class="left-column">
			<div class="top-row">
				{#if activeTab === 'home'}
					<div class="team-rank">Team Rank: <strong>&mdash;</strong></div>
				{/if}
				<button class="menu-btn" on:click={toggleMenu} aria-label="Menu">&#9776;</button>
			</div>
			<div class="content-area">
				{#if activeTab === 'enhance'}
					<EnhanceContent />
				{:else if activeTab === 'story'}
					<div class="center-wrapper">
						<p class="coming-soon">Story — Coming soon</p>
					</div>
				{:else if activeTab === 'home'}
					<HomeContent />
				{:else if activeTab === 'scout'}
					<ScoutContent />
				{/if}
			</div>

			<nav class="bottom-nav">
				<button
					class="nav-btn {activeTab === 'enhance' ? 'active' : ''}"
					on:click={() => switchTab('enhance')}>Enhance</button
				>
				<button
					class="nav-btn disabled"
					on:click={() => switchTab('story')}>Story</button
				>
				<button
					class="nav-btn {activeTab === 'home' ? 'active' : ''}"
					on:click={() => switchTab('home')}>Home</button
				>
				<button
					class="nav-btn {activeTab === 'race' ? 'active' : ''}"
					on:click={() => switchTab('race')}>Race</button
				>
				<button
					class="nav-btn {activeTab === 'scout' ? 'active' : ''}"
					on:click={() => switchTab('scout')}>Scout</button
				>
			</nav>
		</div>

		<div class="side-panel {menuOpen ? 'open' : ''}">
			<div class="panel-header">
				<h2>Menu</h2>
				<button class="close-btn" on:click={closeMenu}>&times;</button>
			</div>

			<div class="panel-content">
				<section>
					<h3>Trainer</h3>
					<button class="panel-item disabled">Inventory - Soon</button>
					<button class="panel-item disabled">Profile - Soon</button>
					<button class="panel-item disabled">Titles - Soon</button>
					<button class="panel-item disabled">Trophy Room - Soon</button>
					<button class="panel-item disabled">Friends - Soon</button>
					<button class="panel-item link" on:click={goToSettings}>Options</button>
				</section>

				<section>
					<h3>Umamusume</h3>
					<button class="panel-item disabled">Archive - Soon</button>
					<button class="panel-item disabled">Comics - Soon</button>
					<button class="panel-item disabled">Secrets - Soon</button>
				</section>

				<section>
					<h3>Other</h3>
					<button class="panel-item disabled">Purchase Carats - Soon</button>
					<button class="panel-item disabled">Data Link - Soon</button>
					<button class="panel-item disabled">Help &amp; Glossary - Soon</button>
					<button class="panel-item disabled">Support - Soon</button>
					<button class="panel-item disabled">Enter Code - Soon</button>
					<button class="panel-item link" on:click={goToTitle}>To Title Screen</button>
				</section>
			</div>
		</div>
	</div>
</div>

{#if menuOpen}
	<button class="overlay" on:click={closeMenu} aria-label="Close menu"></button>
{/if}

<style>
	.layout {
		display: flex;
		flex-direction: column;
		height: 100vh;
		overflow: hidden;
	}

	.main-area {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-height: 0;
	}

	.left-column {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 0;
	}

	.center-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 300px;
		width: 100%;
	}

	.coming-soon {
		color: var(--text);
		opacity: 0.4;
		font-size: 1.1rem;
	}

	.content-area {
		flex: 1;
		overflow-y: auto;
		min-height: 0;
	}

	.bottom-nav {
		display: flex;
		flex-shrink: 0;
		margin: 8px 12px 12px;
		border-radius: 30px;
		overflow: hidden;
		background: var(--box-bg);
		border: 1px solid var(--box-border);
	}

	.nav-btn {
		flex: 1;
		padding: 14px 0;
		font-size: 0.95rem;
		font-weight: 600;
		font-family: monospace;
		cursor: pointer;
		border: none;
		background: var(--button-bg);
		color: var(--button-text);
		transition:
			background 0.15s,
			color 0.15s;
		border-right: 1px solid var(--box-border);
		box-sizing: border-box;
	}

	.nav-btn:last-child {
		border-right: none;
		border-radius: 0 30px 30px 0;
	}

	.nav-btn:first-child {
		border-radius: 30px 0 0 30px;
	}

	.nav-btn.active {
		background: var(--selected-bg);
		color: var(--selected-border);
		border-bottom: 2px solid var(--selected-border);
	}

	.nav-btn:hover:not(.disabled) {
		background: var(--button-hover);
	}

	.nav-btn.disabled {
		opacity: 0.35;
		cursor: default;
		pointer-events: none;
	}

	.top-row {
		display: flex;
		align-items: center;
		padding: 0.5rem 0.5rem 0;
	}

	.menu-btn {
		flex-shrink: 0;
		margin-left: auto;
		background: var(--box-bg);
		border: 1px solid var(--box-border);
		border-radius: 8px;
		color: var(--text);
		font-size: 1.3rem;
		cursor: pointer;
		padding: 0.35rem 0.55rem;
		line-height: 1;
		font-family: monospace;
		transition: background 0.15s;
	}

	.menu-btn:hover {
		background: var(--box-border);
	}

	.team-rank {
		font-size: 1.1rem;
		color: var(--text);
		opacity: 0.7;
	}

	.team-rank strong {
		color: var(--text);
		opacity: 1;
	}

	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 100;
		border: none;
		padding: 0;
		cursor: default;
	}

	.side-panel {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: min(320px, 85vw);
		background: var(--box-bg);
		border-left: 1px solid var(--box-border);
		z-index: 101;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		transform: translateX(100%);
		transition: transform 0.2s ease-out;
	}

	.side-panel.open {
		transform: translateX(0);
	}

	.panel-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 1.2rem;
		border-bottom: 1px solid var(--box-border);
		flex-shrink: 0;
	}

	.panel-header h2 {
		margin: 0;
		font-size: 1.2rem;
		color: var(--text);
	}

	.close-btn {
		background: none;
		border: none;
		color: var(--text);
		font-size: 1.5rem;
		cursor: pointer;
		padding: 0;
		line-height: 1;
		font-family: monospace;
	}

	.panel-content {
		flex: 1;
		overflow-y: auto;
		padding: 0.5rem 1.2rem 2rem;
	}

	.panel-content section {
		margin-top: 1.2rem;
	}

	.panel-content h3 {
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text);
		opacity: 0.4;
		margin: 0 0 0.5rem;
	}

	.panel-item {
		display: block;
		width: 100%;
		padding: 0.7rem 0.8rem;
		font-size: 0.9rem;
		font-family: monospace;
		text-align: left;
		background: none;
		color: var(--text);
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: background 0.1s;
	}

	.panel-item:hover:not(.disabled) {
		background: var(--button-hover);
	}

	.panel-item.disabled {
		opacity: 0.35;
		cursor: default;
	}

	.panel-item.link {
		color: var(--selected-border);
		font-weight: 600;
	}

	.panel-item.link:hover {
		background: var(--selected-bg);
	}

	@media (min-width: 900px) {
		.main-area {
			flex-direction: row;
		}

		.left-column {
			width: 50vw;
		}

		.side-panel {
			position: static;
			width: 50vw;
			transform: none;
			border-left: 1px solid var(--box-border);
			z-index: auto;
		}

		.menu-btn {
			display: none;
		}

		.close-btn {
			display: none;
		}

		.overlay {
			display: none;
		}
	}
</style>
