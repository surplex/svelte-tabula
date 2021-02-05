<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { HeaderDefinition } from "../Interfaces/HeaderDefintion";

  export let headerDefinition: HeaderDefinition;

  let dropDownVisible: boolean = false;

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
