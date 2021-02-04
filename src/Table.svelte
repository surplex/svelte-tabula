<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Row, { RowDefinition } from "./Row.svelte";
  import { HeaderDefinition } from "./Header.svelte";
  import Header from "./Header.svelte";

  export let headers: HeaderDefinition[] = [];
  export let data: RowDefinition[] = [];

  const dispatch = createEventDispatcher();
</script>

<table>
  <thead>
    <tr>
      {#each headers as header}
        <Header headerDefinition={header} />
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <Row rowDefinition={row} />
    {/each}
  </tbody>
</table>
