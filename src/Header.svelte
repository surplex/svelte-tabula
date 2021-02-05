<script lang="ts">
  import { HeaderDefinition } from "./Interfaces/HeaderDefinition";
  import Filter from "./Misc/Filter.svelte";
  import Sort from "./Misc/Sort.svelte";

  export let headerDefinition: HeaderDefinition;

  let dropDownVisible: boolean = false;
</script>

<th on:click={() => (dropDownVisible = !dropDownVisible)}>
  {headerDefinition.text}
  <section style={dropDownVisible ? "display: block;" : "display: none"}>
    {#if headerDefinition.sortable}
      <Sort {headerDefinition} on:sort />
    {/if}
    {#if headerDefinition.filterable}
      <Filter {headerDefinition} on:filter />
    {/if}
  </section>
</th>

<style>
  th {
    position: relative;
    display: inline-block;
  }

  section {
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
  }
</style>
