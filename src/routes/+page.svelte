<script lang="ts">
	import TextField from "../components/TextField.svelte"
	import type { PageData } from ".svelte-kit/types/src/routes/$types";
	export let data: PageData;
	const sortedCount = Object.entries(data.techCounts.overall)
		.sort((a, b) => (a[1] < b[1] ? 1 : -1))
		.splice(0, 25);
</script>

<h1 class="text-4xl uppercase w-full text-center py-4">
	Data gathered from {data.count} job postings
</h1>

<div class="flex justify-center m-8 w-full gap-5">
	<TextField label="Tech"/>
	<TextField label="Location"/>
	<TextField label="Company"/>
</div>

<div class="text-3xl mb-5 text-center underline">Top technologies:</div>
{#each sortedCount as tech}
	<div class="text-2xl flex justify-start">
		<span class="w-64 text-end">{tech[0]}</span>
		<progress
			class="progress my-auto mx-8 h-6 rounded-none"
			value={tech[1]}
			max={sortedCount[0][1] / 0.9}
		/>
		<span class="w-64">{tech[1]}</span>
	</div>
{/each}

<!-- {#each data.postings as p} -->
<!-- 	<div class="p-2"> -->
<!-- 	<div class="text-2xl hover-bordered"><a class="link" href={p.url}>{p.heading}</a></div> -->
<!-- 	<div>{p.keywords.join(", ")}</div> -->
<!-- 	</div> -->
<!-- {/each} -->
