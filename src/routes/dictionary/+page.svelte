<script lang="ts">
	import { onMount } from 'svelte';

	let searchText = '';
	let searchIsSealang = false;
	let result: any = null;
	let results: string[] = [];

	let dictionary: any[] = null;

	onMount(async () => {
		// Simulate fetching dictionary data
		dictionary = (await (await fetch('/dictionary.json')).json()).words;
	});

	function search() {
		if (searchText.trim() === '') {
			result = undefined;
			return;
		}

		if (searchIsSealang) {
			result = dictionary.find((word) => word.sealang === searchText);
		} else {
			result = dictionary.find((word) => word.english === searchText);
		}

		results = dictionary
			.filter((word) => {
				if (searchIsSealang) {
					return word.sealang.includes(searchText);
				} else {
					return word.english.includes(searchText.toLowerCase());
				}
			})
			.map((word) => (searchIsSealang ? word.sealang : word.english));

	}
</script>

<div>

	<div class="flex flex-col w-full h-full items-center justify-center bg-gray-100 p-4 rounded-lg shadow-lg">
		<h2 class="text-2xl">Search for a word</h2>
		<div class="flex items-center mb-4">
			<label for="sealang" class="mr-2">in Sealang ?</label>
			<input type="checkbox" bind:checked={searchIsSealang} class="mr-2" />
		</div>
		<input type="text" bind:value={searchText} class="border border-gray-300 rounded-lg p-2 w-full {searchIsSealang ? 'font-sealang' : ''}" placeholder="Type a word..." />

		<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2" on:click={search}>
			Search
		</button>
	</div>

	<div class="flex flex-col w-full h-full items-center justify-center p-4 mt-4" hidden={result !== undefined}>
		<div class="w-full bg-gray-50 p-4 rounded-lg shadow-lg mt-2">
			<p>No results found.</p>
		</div>
	</div>

	<div class="flex flex-col w-full h-full items-center justify-center p-4 mt-4" hidden={result === undefined || result === null}>
		<div class="w-full bg-gray-50 p-4 rounded-lg shadow-lg mt-2">
			<div class="flex flex-row items-center mb-2">
				<h3 class="text-xl font-bold">{result ? result.english : ""} - </h3>
				<h3 class="text-xl font-bold font-sealang"> {result ? result.sealang : " "}</h3>
			</div>
			<p>type : {result ? result.type : ""}</p>
			<p>meaning : {result ? result.meaning : ""}</p>
			<p><em>example : {result ? result.example : ""}</em></p>
			<p class="font-sealang"><em>{result ? result.exampleSealang : ""}</em></p>
		</div>
	</div>

	<div class="flex flex-col w-full h-full items-center justify-center p-4 mt-4" hidden={result === null}>
		<div class="w-full bg-gray-50 p-4 rounded-lg shadow-lg mt-2">
			<h3 class="text-xl font-bold">See also</h3>
			<ul>
				{#each results as word}
					<li><button class="mt-2 hover:underline" on:click={() => { searchText = word; search(); }}>
						{word}
					</button></li>
				{/each}
			</ul>
		</div>
	</div>

</div>

<style>
	.font-sealang {
		font-family: sealang, serif;
	}

</style>