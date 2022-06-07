<script>
  import Header from "./components/Header.svelte";
  import FilterSection from "./components/FilterSection.svelte";
  import SpellsList from "./components/SpellsList.svelte";
</script>

<Header />
<FilterSection />
<SpellsList />

<style>
  :global(body) {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
