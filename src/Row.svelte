<script lang="ts">
  import Column from "./Column.svelte";
  import { RowDefinition } from "./Interfaces/RowDefinition";

  export let rowDefinition: RowDefinition;
</script>

<tr>
  {#each rowDefinition.columns as column}
    <Column on:edit columnDefinition={column} />
  {/each}
</tr>
