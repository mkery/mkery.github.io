<script>
  import { onMount } from 'svelte';
  import ArtPiece from './ArtPiece.svelte';

  let images = null;

  onMount(async () => {
    try {
      const artPath = '/resources/art/';
      const response = await fetch(artPath + 'show.txt');
      const data = await response.text();
      console.log(data);
      let pieces = data.split('\n');
      pieces.pop();
      pieces = pieces.map((item) => artPath + item);
      images = pieces;
    } catch (error) {
      console.error('Error loading portfolio images:', error);
    }
  });
</script>

{#if images}
  <div class="Portfolio">
    {#each images as piece}
      <ArtPiece src={piece} />
    {/each}
  </div>
{/if}
