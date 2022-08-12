<script>
  import FilterSection from "./FilterSection.svelte";
  import SpellsList from "./SpellsList.svelte";
</script>

<main>
  <FilterSection />
  <SpellsList spellsComponent="all" />
</main>

<style>
  main {
    margin-left: 0;
    margin-top: 42%;
    margin-bottom: 23%;
  }
</style>
