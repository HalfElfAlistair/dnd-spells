<script>
  export let spell = { name: "Spell Name", level: "Level", class: "Class" };
</script>

<li>
  <div class="spell-name-area">
    <h2>{spell.name}</h2>
  </div>
  <!-- <div class="level-class-area">
    <p>Level: {spell.level}</p>
    <p>Class: {spell.class}</p>
  </div> -->
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
