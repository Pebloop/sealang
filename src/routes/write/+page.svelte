<script lang="ts">
	import { onMount } from 'svelte';
	import { arrayToChar } from '$lib/writer';

	let inputText = '';
	let isRegistering = false;
	let character = [false, false, false, false, false, false];

	onMount(() => {
		document.addEventListener('keydown', handleKeydown);
	});

	function handleKeydown(event: KeyboardEvent) {
		if (isRegistering) {
			const key = event.key.toLowerCase();
			switch (key) {
				case 'e':
					character[0] = !character[0];
					break;
				case 's':
					character[1] = !character[1];
					break;
				case 'd':
					character[2] = !character[2];
					break;
				case 'f':
					character[3] = !character[3];
					break;
				case 'x':
					character[4] = !character[4];
					break;
				case 'c':
					character[5] = !character[5];
					break;
				case 'v':
					inputText += arrayToChar(character);
					character = [false, false, false, false, false, false];
					break;
			}
		}
	}

	function startRegister() {
		isRegistering = true;
		character = [false, false, false, false, false, false];
	}

	function stopRegister() {
		isRegistering = false;
	}

	function toggleRegister() {
		isRegistering = !isRegistering;
		if (isRegistering) {
			startRegister();
		} else {
			stopRegister();
		}
	}
</script>

<div class="p-4">

	<div class="flex flex-row items-center justify-center mb-5">
		<button on:click={toggleRegister} class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
			{isRegistering ? 'Stop Registering' : 'Start Registering'}
		</button>
		<p class="font-sealang text-6xl border-2 w-16 h-16 text-center ml-5">{arrayToChar(character)}</p>
	</div>

	<textarea
		placeholder=""
		class="border border-gray-300 rounded-lg p-2 w-full mb-4 h-64"
		on:click={stopRegister}
		bind:value={inputText}
	></textarea>
</div>

<style>
    textarea {
			font-family: sealang,serif;
  }

	.font-sealang {
		font-family: sealang, serif;
	}
</style>