<script>
  import { Link } from "svelte-navigator";
</script>

<nav>
  <Link class="navlink" to="/" style="color: #f7f7f6">All</Link>
  <Link class="navlink" to="/class" style="color: #f7f7f6">Class</Link>
</nav>

<style>
  nav {
    padding: 5%;
    background-color: #d04f45;
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
    font-size: 20px;
    font-weight: bold;
  }

  :global(a:hover) {
    text-decoration: underline;
  }
</style>
