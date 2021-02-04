<script context="module" lang="ts">
  export interface HeaderDefinition {
    text: string;
    sortable: boolean;
    filterable: boolean;
  }
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Filter from "./Misc/Filter.svelte";
  import Sort from "./Misc/Sort.svelte";

  export let headerDefinition: HeaderDefinition = null;

  let dropDownVisible: boolean = false;

  const dispatch = createEventDispatcher();
</script>

<th on:click={() => (dropDownVisible = !dropDownVisible)}>
  {headerDefinition.text}
  <section>
    {#if headerDefinition.sortable}
      <Sort {headerDefinition} on:sort={(event) => dispatch("sort", event)} />
    {/if}
    {#if headerDefinition.filterable}
      <Filter
        {headerDefinition}
        on:filter={(event) => dispatch("filter", event)}
      />
    {/if}
  </section>
</th>

<style>
  th {
    position: relative;
    display: inline-block;
  }

  section {
    display: block;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
  }
</style>
