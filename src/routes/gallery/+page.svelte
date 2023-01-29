<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex flex-wrap justify-center">
	{#each data.paintings as painting}
		<div class="m-16 w-72">
			<img src={painting.thumbnailUrl.toString()} alt={painting.title} />
			<div class="text-center">
				<h1>{painting.title}</h1>
			</div>
		</div>
	{/each}
</div>
