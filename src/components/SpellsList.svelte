<script>
  import SpellCard from "./SpellCard.svelte";
  import { getSpells, getSpellsByClass } from "../utils/api";
  import { levelsQueryString, classQueryString } from "../store-files/querys";

  export let spellsComponent;

  const apiRequestFilter = (levelQuery, classQuery) => {
    return spellsComponent === "all"
      ? getSpells(levelQuery)
      : getSpellsByClass(classQuery);
  };
</script>

<section>
  {#await apiRequestFilter($levelsQueryString, $classQueryString) then data}
    {#if data.length < 1}
      <p>Sorry, this class doesn't have any spells in the Players Handbook.</p>
    {:else}
      <ul>
        {#each data as spell}
          <SpellCard {spell} />
        {/each}
      </ul>
    {/if}
  {/await}
</section>

<style>
  section {
    margin: 5%;
    border: solid 2px #c92a2a;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
  p {
    margin: 5%;
  }
</style>
