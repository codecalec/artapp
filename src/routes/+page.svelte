<script lang="ts">
    import { fade } from 'svelte/transition';
    let index: number = 0;
    const images = [
        "http://jodyart.co.za/_include/img/slider-images/image01.jpg",
        "http://jodyart.co.za/_include/img/slider-images/image02.jpg",
        "http://jodyart.co.za/_include/img/slider-images/image03.jpg",
        "http://jodyart.co.za/_include/img/slider-images/image04.jpg",
    ];

    function updateImage() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
    }

    setInterval(updateImage, 5000)
</script>

{#each images as image, i}
    {#if index === i}
    <div transition:fade class="-z-50 absolute inset-0 w-full h-full">
        <img src={image} alt="background" class="min-w-full h-auto object-cover sm:max-h-full"/>
    </div>
    {/if}
{/each}
