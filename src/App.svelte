<script>
  import Header from "./components/Header.svelte";
  import AllSpells from "./components/AllSpells.svelte";
  import ClassSpells from "./components/ClassSpells.svelte";
  import SpellPage from "./components/SpellPage.svelte";
  import Nav from "./components/Nav.svelte";
  import { Router, Route } from "svelte-navigator";
</script>

<Router>
  <Route path="/">
    <Header />
    <AllSpells />
  </Route>
  <Route path="/class">
    <Header />
    <ClassSpells />
  </Route>
  <Route path="/spell">
    <Header />
    <SpellPage />
  </Route>
  <Nav />
</Router>

<style>
  :global(body) {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
