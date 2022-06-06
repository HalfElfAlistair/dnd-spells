<script>
  import SpellCard from "./SpellCard.svelte";
</script>

<main>
  <ul>
    <SpellCard />
    <SpellCard />
    <SpellCard />
  </ul>
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
