<script>
  import SpellCard from "./SpellCard.svelte";
  import { getSpells } from "../utils/api";
  import { levelsQueryString } from "../store-files/querys";
</script>

<main>
  {#await getSpells($levelsQueryString) then data}
    <ul>
      {#each data as spell}
        <SpellCard {spell} />
      {/each}
    </ul>
  {/await}
</main>

<style>
  main {
    margin: 5%;
    border: solid 2px #c92a2a;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
</style>
