<script>
  import { levelsQueryString } from "../store-files/querys";

  let filterToggleValue = false;

  const filterToggle = () => {
    filterToggleValue
      ? (filterToggleValue = false)
      : (filterToggleValue = true);
  };

  let checkedLevels = [];

  const levelSubmit = (event) => {
    event.preventDefault();
    const checkedLevelsString = checkedLevels.join("&");
    levelsQueryString.set(checkedLevelsString);
  };

  const checkedLevelsUpdate = (event) => {
    if (event.target.checked) {
      checkedLevels = [...checkedLevels, event.target.value];
      return checkedLevels;
    } else {
      const updatedCheckedLevels = checkedLevels.filter(
        (val) => val !== event.target.value
      );
      checkedLevels = [...updatedCheckedLevels];
      return checkedLevels;
    }
  };
</script>

{#if filterToggleValue}
  <section>
    <button on:click={filterToggle}>Hide Filters</button>
    <form>
      <div id="checkboxes">
        <div class="level-select">
          <input
            type="checkbox"
            value="level=0"
            id="cantrip"
            on:click={checkedLevelsUpdate}
          />
          <label for="cantrip">Cantrip</label>
        </div>
        <div class="level-select">
          <input
            type="checkbox"
            value="level=1"
            id="level-1"
            on:click={checkedLevelsUpdate}
          />
          <label for="level-1">Level 1</label>
        </div>
        <div class="level-select">
          <input
            type="checkbox"
            value="level=2"
            id="level-2"
            on:click={checkedLevelsUpdate}
          />
          <label for="level-2">Level 2</label>
        </div>
        <div class="level-select">
          <input
            type="checkbox"
            value="level=3"
            id="level-3"
            on:click={checkedLevelsUpdate}
          />
          <label for="level-3">Level 3</label>
        </div>
        <div class="level-select">
          <input
            type="checkbox"
            value="level=4"
            id="level-4"
            on:click={checkedLevelsUpdate}
          />
          <label for="level-4">Level 4</label>
        </div>
        <div class="level-select">
          <input
            type="checkbox"
            value="level=5"
            id="level-5"
            on:click={checkedLevelsUpdate}
          />
          <label for="level-5">Level 5</label>
        </div>
      </div>
      <button value="Submit" id="submit" on:click={levelSubmit}>Submit</button>
    </form>
  </section>
{:else}
  <section>
    <button on:click={filterToggle}>Show Filters</button>
  </section>
{/if}

<style>
  section {
    margin: 5%;
    border: solid 2px #e67700;
    padding: 5%;
  }

  button {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: black;
    color: white;
  }

  form {
    margin: 5%;
    border: solid 2px hotpink;
    padding: 5%;
  }

  .level-select * {
    display: inline;
  }

  #checkboxes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  #submit {
    width: 100%;
    margin-top: 5%;
    padding: 5px;
    background-color: white;
    color: black;
    border: solid 2px black;
    border-radius: 5px;
  }
</style>
