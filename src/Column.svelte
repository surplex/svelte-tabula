<script context="module" lang="ts">
  export interface ColumnDefinition {
    editable: boolean;
    value: string;
  }
  export interface EditEvent {
    columnDefinition: ColumnDefinition;
    value: string;
    rawEvent: Event;
  }
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let columnDefinition: ColumnDefinition = null;

  const dispatch = createEventDispatcher();
  let editActive: boolean = false;
  let value: string = columnDefinition.value ?? "";
  const triggerEditEvent = function (event: KeyboardEvent) {
    if (event.code != "Enter") {
      return;
    }
    editActive = false;
    dispatch("edit", { columnDefinition, value, rawEvent: event });
  };
</script>

<td on:click={() => (columnDefinition.editable ? (editActive = true) : null)}>
  {#if columnDefinition.editable && editActive}
    <textarea bind:value on:keydown={triggerEditEvent} />
  {:else}
    {value}
  {/if}
</td>
