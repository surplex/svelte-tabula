<script lang="ts">
  import { getContext, onMount } from "svelte";
  import { optionsKey } from "./context";
  import SortFilter from "./Filters/SortFilter.svelte";
  import TextFilter from "./Filters/TextFilter.svelte";
  import { HeaderDefinition } from "./Interfaces/HeaderDefinition";
  import { headerDefinitions as hdStore } from "./stores";
  export let headerDefinitions: HeaderDefinition[] = [];
  onMount(() => {
    hdStore.set(headerDefinitions);
  });

  const { getClassesForElement } = getContext(optionsKey);
  let dropDownVisible: HeaderDefinition | undefined = undefined;

  const setDropDown = (headerDefinition: HeaderDefinition) => {
    if (headerDefinition === dropDownVisible) {
      dropDownVisible = undefined;
    }
    dropDownVisible = headerDefinition;
  };
</script>

<tr class={getClassesForElement("tr")}>
  {#each headerDefinitions as headerDefinition}
    <th
      on:click={() => setDropDown(headerDefinition)}
      class={getClassesForElement("th")}
    >
      {headerDefinition.name}
      <section
        class={getClassesForElement("dropdown")}
        style={dropDownVisible === headerDefinition
          ? "display: block;"
          : "display: none"}
      >
        {#if headerDefinition.sortable}
          <SortFilter {headerDefinition} on:sort />
        {/if}
        {#if headerDefinition.filterable}
          <TextFilter {headerDefinition} on:filter />
        {/if}
      </section>
    </th>
  {/each}
</tr>

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
