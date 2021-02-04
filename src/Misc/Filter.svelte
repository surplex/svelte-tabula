<script context="module" lang="ts">
  export interface FilterEvent {
    headerDefinition: HeaderDefinition;
    filter: string;
    rawEvent: Event;
  }
</script>

<script lang="ts">
  import { HeaderDefinition } from "../Header.svelte";
  import { createEventDispatcher } from "svelte";

  export let headerDefinition: HeaderDefinition = null;

  let dropDownVisible: boolean = false;

  const dispatch = createEventDispatcher();
</script>

<input type="text" on:keydown={(event) => dispatch('filter', {headerDefinition, filter: this.value, rawEvent: event})} placeholder="Filter.." />
