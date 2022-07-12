<script>
  import { Link } from "svelte-navigator";
  import { spellPathString } from "../store-files/spellPath";

  export let spell = { name: "", index: "", url: "" };

  const pathPass = (event) => {
    spellPathString.set(event.target.attributes.value.value);
  };
</script>

<li>
  <Link class="navlink" to="/spell">
    <div class="spell-name-area" value={spell.url} on:click={pathPass}>
      {spell.name}
    </div>
  </Link>
</li>

<style>
  li {
    margin: 5%;
    border: solid 2px #0b7285;
    padding-left: 5%;
  }

  h2,
  p {
    margin: 5px;
  }

  /* .level-class-area {
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 25%;
  } */
</style>
