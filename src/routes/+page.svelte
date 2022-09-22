<script lang="ts">
	import TextField from "../components/TextField.svelte";
	import type { PageData } from ".svelte-kit/types/src/routes/$types";
	export let data: PageData;
	const sortedCount = Object.entries(data.techCounts.overall)
		.sort((a, b) => (a[1] < b[1] ? 1 : -1))
		.splice(0, 25);
</script>

<h1 class="text-4xl uppercase w-full text-center py-4">
	Data gathered from {data.count} job postings
</h1>

<div class="flex justify-center m-8 w-full gap-5 flex-wrap">
	<TextField label="Tech" placeholder="Tech" />
	<TextField label="Location" placeholder="Location" />
	<TextField label="Company" placeholder="Company" />
</div>

<div class="text-3xl mb-5 text-center underline">Top technologies:</div>
{#each sortedCount as tech}
	<div class="text-2xl max-w-lg relative m-auto">
		<div class="absolute inline-block left-2 z-50 font-bold">{tech[0]}</div>
		<div class="absolute right-2 z-50">{tech[1]}</div>
		<progress
			class="progress progress-secondary my-auto h-8 bg-slate-600 border-current border-2"
			value={tech[1]}
			max={sortedCount[0][1] / 0.9}
		/>
	</div>
{/each}

<!-- {#each data.postings as p} -->
<!-- 	<div class="p-2"> -->
<!-- 	<div class="text-2xl hover-bordered"><a class="link" href={p.url}>{p.heading}</a></div> -->
<!-- 	<div>{p.keywords.join(", ")}</div> -->
<!-- 	</div> -->
<!-- {/each} -->
