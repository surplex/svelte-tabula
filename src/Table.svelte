<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Row from "./Row.svelte";
  import Header from "./Header.svelte";
  import { HeaderDefinition } from "./Interfaces/HeaderDefinition";
  import { RowDefinition } from "./Interfaces/RowDefinition";

  export let headers: HeaderDefinition[] = [];
  export let data: RowDefinition[] = [];

  const dispatch = createEventDispatcher();
</script>

<table>
  <thead>
    <tr>
      {#each headers as header}
        <Header
          on:sort={(event) => dispatch("sort", event)}
          on:filter={(event) => dispatch("filter", event)}
          headerDefinition={header}
        />
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <Row on:edit={(event) => dispatch("edit", event)} rowDefinition={row} />
    {/each}
  </tbody>
</table>
