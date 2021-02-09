<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { HeaderDefinition } from "../Interfaces/HeaderDefinition";
  export let headerDefinition: HeaderDefinition;
  const dispatch = createEventDispatcher();
</script>

<input
  type="text"
  on:keydown={(event) =>
    dispatch("filter", {
      headerDefinition,
      filter: this.value,
      rawEvent: event,
    })}
  placeholder="Filter.."
/>
