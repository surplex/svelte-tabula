<script context="module" lang="ts">
  import type { ColumnDefinition } from "./Column.svelte";

  export interface RowDefinition {
    columns: ColumnDefinition[];
  }
</script>

<script lang="ts">
  import Column from "./Column.svelte";

  export let rowDefinition: RowDefinition;
</script>

<tr>
  {#each rowDefinition.columns as column}
    <Column columnDefinition={column} />
  {/each}
</tr>
