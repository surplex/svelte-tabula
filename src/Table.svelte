<script lang="ts">
  import Row from "./Row.svelte";
  import Header from "./Header.svelte";
  import { HeaderDefinition } from "./Interfaces/HeaderDefinition";
  import { RowDefinition } from "./Interfaces/RowDefinition";

  export let headers: HeaderDefinition[] = [];
  export let data: RowDefinition[] = [];
</script>

<table>
  <thead>
    <tr>
      {#each headers as header}
        <Header on:sort on:filter headerDefinition={header} />
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <Row on:edit rowDefinition={row} />
    {/each}
  </tbody>
</table>
