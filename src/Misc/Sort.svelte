<script context="module" lang="ts">
  type Sort = "asc" | "desc" | "normal";
  export interface SortEvent {
    headerDefinition: HeaderDefinition;
    sort: Sort;
    rawEvent: Event;
  }
</script>

<script lang="ts">
  import { HeaderDefinition } from "../Header.svelte";
  import { createEventDispatcher } from "svelte";

  export let headerDefinition: HeaderDefinition = null;

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
