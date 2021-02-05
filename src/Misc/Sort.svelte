<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Sort } from "../Interfaces/Events/SortEvent";
  import { HeaderDefinition } from "../Interfaces/HeaderDefinition";

  export let headerDefinition: HeaderDefinition;

  const dispatch = createEventDispatcher();
  let currentSort: Sort = "normal";
  const getNewSort = () => {
    switch (currentSort) {
      case "asc":
        currentSort = "desc";
        break;
      case "desc":
        currentSort = "normal";
        break;
      default:
        currentSort = "asc";
        break;
    }
  };
</script>

<button
  on:click={(event) => {
    dispatch("sort", { headerDefinition, sort: getNewSort(), rawEvent: event });
  }}>Sortieren ({currentSort})</button
>
