<script>
  import { selectedClass } from "../store-files/classSelection";
  function classSelector(event) {
    console.log(event.target.value);
    selectedClass.set(event.target.value);
  }
</script>

<section>
  <select on:change={classSelector}>
    <option value="class 1">class 1</option>
    <option value="class 2">class 2</option>
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
