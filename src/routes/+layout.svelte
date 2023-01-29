<script lang="ts">
  import "../app.css";
  import "@fontsource/oswald"
  import "@fontsource/lato"
</script>


<div class="container mx-auto px-32">

  <nav class="flex flex-row px-5 py-3 my-10 rounded-xl bg-sky-900 text-sky-100 font-display text-xl">

    <a href="/gallery" class="px-2 flex items-center justify-center hover:text-sky-300">Gallery</a>

    <a href="/" class="grow px-2 flex items-center justify-center"><img src="logo.png" alt="Jody Waterson Art"></a>
    
    <a href="/about" class="px-2 flex items-center justify-center hover:text-sky-300">About</a>
  </nav>
  <slot></slot>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.slate.200);
  }
</style>