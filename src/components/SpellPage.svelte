<script>
  import { spellPathString } from "../store-files/spellPath";
  import { getSpell } from "../utils/api";
  import SpellDataTable from "./SpellDataTable.svelte";
</script>

{#await getSpell($spellPathString) then data}
  <div>
    <h2>{data.name}</h2>
    <p>{data.desc}</p>
    <p>{data.higher_level}</p>
    <SpellDataTable spellData={data} />
  </div>
{/await}

<style>
  div {
    margin: 5%;
    overflow: scroll;
  }
</style>
