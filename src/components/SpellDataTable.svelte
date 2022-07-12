<script>
  export let spellData;
</script>

<table>
  <tr>
    <td>Level</td>
    <td>{spellData.level}</td>
  </tr>
  <tr>
    <td>Range</td>
    <td>{spellData.range}</td>
  </tr>
  <tr>
    <td>Casting Time</td>
    <td>{spellData.casting_time}</td>
  </tr>
  <tr>
    <td>Duration</td>
    <td>{spellData.duration}</td>
  </tr>
  <tr>
    <td>Components</td>
    <td>{`${spellData.components} (${spellData.material})`}</td>
  </tr>
</table>

<style>
  table {
    border: solid 2px #2b8a3e;
    width: 100%;
    margin-bottom: 25%;
  }

  td {
    border: solid 1px black;
  }

  tr:nth-child(odd) {
    background-color: aquamarine;
  }
  tr:nth-child(even) {
    background-color: tan;
  }
</style>
