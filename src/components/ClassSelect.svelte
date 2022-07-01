<script>
  export let classList = [];
  import { selectedClass } from "../store-files/classSelection";
  import { classQueryString } from "../store-files/querys";

  classQueryString.set(classList[0].index);

  function classSelector(event) {
    const selection = event.target.options[event.target.selectedIndex];
    selectedClass.set(selection.text);
    classQueryString.set(selection.value);
  }
</script>

<section>
  <select on:change={classSelector}>
    {#each classList as dndClass}
      <option value={dndClass.index}>{dndClass.name}</option>
    {/each}
  </select>
</section>

<style>
  section {
    margin: 5%;
    border: solid 2px #e67700;
    padding: 5%;
  }

  select {
    width: 100%;
    margin-top: 5%;
    padding: 5px;
    background-color: white;
    color: black;
    border: solid 2px black;
    border-radius: 5px;
  }
</style>
