<script lang="ts">
  import { goto } from '$app/navigation';

  let inputs: string[] = ['', '', '', ''];
  let error = false;
  const correctPassword = '4325';

  async function handleInput(index: number, value: string) {
    // Extract first digit only
    const digit = value.replace(/\D/g, '').charAt(0);

    // Update array and input value
    inputs[index] = digit;
    const input = document.querySelector(`input[data-index="${index}"]`) as HTMLInputElement;
    if (input) {
      input.value = digit;
    }

    // Auto-focus next input if we have a digit
    if (digit && index < 3) {
      const nextInput = document.querySelector(`input[data-index="${index + 1}"]`) as HTMLInputElement;
      if (nextInput) nextInput.focus();
    }

    // Check if all digits are entered
    if (inputs.every(v => v !== '')) {
      const password = inputs.join('');
      if (password === correctPassword) {
        // Set authentication cookie
        document.cookie = 'secrets_authenticated=true; path=/0/secrets';
        // eslint-disable-next-line svelte/no-navigation-without-resolve
        await goto('/0/secrets', { replaceState: true });
      } else {
        error = true;
        setTimeout(() => {
          inputs = ['', '', '', ''];
          error = false;
          const firstInput = document.querySelector(`input[data-index="0"]`) as HTMLInputElement;
          if (firstInput) firstInput.focus();
        }, 500);
      }
    }
  }

  function handleKeyDown(index: number, event: KeyboardEvent) {
    if (event.key === 'Backspace' && !inputs[index] && index > 0) {
      const prevInput = document.querySelector(`input[data-index="${index - 1}"]`) as HTMLInputElement;
      if (prevInput) prevInput.focus();
    }
  }
</script>

<div class="wrapper">
  <div class="container">

    <div class={`input-group ${error ? 'shake' : ''}`}>
      {#each inputs as value, index (index)}
        <input
          type="number"
          data-index={index}
          inputmode="numeric"
          value={value}
          on:input={(e) => handleInput(index, e.currentTarget.value)}
          on:keydown={(e) => handleKeyDown(index, e)}
          maxlength="1"
          class="auth-input"
        />
      {/each}
    </div>

    {#if error}
      <p class="error-text">Incorrect</p>
    {/if}
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
  }

  .container {
    width: 100%;
    max-width: 350px;
    padding: 40px 24px;
    background: var(--box-bg);
    border: 2px solid var(--box-border);
    border-radius: 12px;
    text-align: center;
  }

  .hint {
    font-size: 13px;
    opacity: 0.6;
    margin: 0 0 32px;
    color: var(--text);
  }

  .input-group {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-bottom: 16px;
    transition: transform 0.1s ease-out;
  }

  .input-group.shake {
    animation: shake 0.3s;
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    75% { transform: translateX(8px); }
  }

  .auth-input {
    width: 56px;
    height: 56px;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    background: var(--bg);
    color: var(--text);
    border: 2px solid var(--box-border);
    border-radius: 10px;
    font-family: monospace;
    transition: border-color 0.15s, box-shadow 0.15s;
  }

  .auth-input::-webkit-outer-spin-button,
  .auth-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .auth-input[type=number] {
    appearance: none;
    -moz-appearance: textfield;
  }

  .auth-input:focus {
    outline: none;
    border-color: var(--button-hover);
    box-shadow: 0 0 8px rgba(100, 100, 100, 0.2);
  }

  .auth-input::placeholder {
    color: var(--text);
    opacity: 0.2;
  }

  .error-text {
    font-size: 13px;
    color: #ff6b6b;
    margin: 0;
    animation: fadeIn 0.2s ease-in;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
