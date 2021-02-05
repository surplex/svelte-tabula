<script lang="ts">
  import Column from "./Column.svelte";
  import { createEventDispatcher } from "svelte";
  import { RowDefinition } from "./Interfaces/RowDefinition";

  export let rowDefinition: RowDefinition;
  const dispatch = createEventDispatcher();
</script>

<tr>
  {#each rowDefinition.columns as column}
    <Column
      on:edit={(event) => dispatch("edit", event)}
      columnDefinition={column}
    />
  {/each}
</tr>
