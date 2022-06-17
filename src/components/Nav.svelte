<script>
  import { Link } from "svelte-navigator";
</script>

<nav>
  <Link class="navlink" to="/">All Spells</Link>
  <Link class="navlink" to="/class">Class</Link>
</nav>

<style>
  nav {
    border: solid 2px #862e9c;
    padding: 5%;
    background-color: white;
    width: 89%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  :global(a) {
    margin: 0 5%;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
  }

  :global(a:hover) {
    text-decoration: underline;
  }
</style>
