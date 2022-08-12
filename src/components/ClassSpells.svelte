<script>
  import ClassHeading from "./ClassHeading.svelte";
  import ClassSelect from "./ClassSelect.svelte";
  import SpellsList from "./SpellsList.svelte";
  import { getClasses } from "../utils/api";
</script>

<main>
  {#await getClasses() then data}
    <ClassSelect classList={data} />
    <ClassHeading firstClassName={data[0].name} />
    <SpellsList spellsComponent="class" />
  {/await}
</main>

<style>
  main {
    margin-left: 0;
    margin-top: 42%;
    margin-bottom: 23%;
  }
</style>
