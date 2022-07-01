<script>
  export let firstClassName = "";
  import { selectedClass } from "../store-files/classSelection";
</script>

{#if $selectedClass.length < 1}
  <h2>{firstClassName} Spells</h2>
{:else}
  <h2>{$selectedClass} Spells</h2>
{/if}

<style>
  h2 {
    margin: 5%;
    padding: 5%;
    border: solid 2px hotpink;
  }
</style>
