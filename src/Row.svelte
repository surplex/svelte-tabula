<script lang="ts">
  import { HeaderDefinition } from "./Interfaces/HeaderDefinition";
  import { RowDefinition } from "./Interfaces/RowDefinition";
  import { headerDefinitions } from "./stores";
  import { createEventDispatcher } from "svelte";
  export let row: Object;
  const dispatch = createEventDispatcher();
  let tableData: RowDefinition[];
  let editActive: boolean = false;

  headerDefinitions.subscribe((headerDefinitionsValue: HeaderDefinition[]) => {
    tableData = headerDefinitionsValue.map(
      (headerDefinition: HeaderDefinition) => {
        if (!Object.keys(row).includes(headerDefinition.prop)) {
          return;
        }
        return {
          prop: headerDefinition.prop,
          value: row[headerDefinition.prop],
          editable: headerDefinition.editable,
        };
      }
    );
  });

  const triggerEditEvent = (
    event: KeyboardEvent,
    rowDefinition: RowDefinition
  ) => {
    if (event.code != "Enter") {
      return;
    }
    editActive = false;
    dispatch("edit", { rowDefinition, rawEvent: event });
  };
</script>

<tr>
  {#each tableData as rowDefinition}
    {#if $$slots[rowDefinition.prop]}
      <!-- TODO: Implement dynamic slots or another solution -->
    {:else}
      <td
        on:click={() => (rowDefinition.editable ? (editActive = true) : null)}
      >
        {#if rowDefinition.editable && editActive}
          <textarea
            on:keydown={(event) => triggerEditEvent(event, rowDefinition)}
          />
        {:else}
          {rowDefinition.value}
        {/if}
      </td>
    {/if}
  {/each}
</tr>
