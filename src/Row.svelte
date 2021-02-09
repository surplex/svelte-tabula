<script lang="ts">
  import { onMount } from "svelte";
import { HeaderDefinition } from "./Interfaces/HeaderDefinition";
import { RowDefinition } from "./Interfaces/RowDefinition";
  import { headerDefinitions } from "./stores";
  import { createEventDispatcher } from "svelte";
  export let row: Object;
  const dispatch = createEventDispatcher();
  let tableData: RowDefinition[];
  let editActive: boolean = false;

  headerDefinitions.subscribe((headerDefinitionsValue: HeaderDefinition[]) => {
      tableData = headerDefinitionsValue.map((headerDefinition: HeaderDefinition) => {
        if (!Object.keys(row).includes(headerDefinition.prop)) {
            return;
        }
        return {
              prop: headerDefinition.prop,
              value: row[headerDefinition.prop],
              editable: headerDefinition.editable
          };
      });
  });

  const triggerEditEvent = (event: KeyboardEvent, rowDefinition: RowDefinition) => {
    if (event.code != "Enter") {
      return;
    }
    editActive = false;
    dispatch("edit", { rowDefinition, rowDefinition.value, rawEvent: event });
  };
</script>

<tr>
  {#each tableData as rowDefinition}
    {#if $$slots[rowDefinition.prop]}
      <slot name={rowDefinition.prop} {rowDefinition} />
    {:else}
      <td
        on:click={() => (rowDefinition.editable ? (editActive = true) : null)}
      >
        {#if rowDefinition.editable && editActive}
          <textarea on:keydown={(event) => triggerEditEvent(event, rowDefinition)} />
        {:else}
          {rowDefinition.value}
        {/if}
      </td>
    {/if}
  {/each}
</tr>
