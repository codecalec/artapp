<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex justify-center py-3 mx-auto max-w-sm rounded-xl bg-sky-900 text-sky-100">
    <button class="text-sky-100">
        List
    </button>
</div>

<div class="flex flex-wrap justify-center">

{#each data.paintings as painting}
<div class="m-16 w-72">
	<img src={painting.url.toString()} alt={painting.title} />
    <div class="text-center">
        <h1>{painting.title}</h1>
    </div>
</div>
{/each}
</div>