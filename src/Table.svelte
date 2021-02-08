<script lang="ts">
  import { getContext, setContext } from "svelte";
  import { optionsKey } from "./context";
  export let options: any = undefined;
  setContext(optionsKey, {
    options,
    getClassesForElement: (element: string) => {
      if (!Object.keys(options).includes(element)) {
        return "default_style";
      }
      return options[element].join(" ");
    }
  });
  const { getClassesForElement } = getContext(optionsKey);
</script>

<table class={getClassesForElement("table")}>
  <thead class={getClassesForElement("thead")}>
    <slot name="head" />
  </thead>
  <tbody class={getClassesForElement("tbody")}>
    <slot name="body" />
  </tbody>
</table>

<style>
  .default_style {
    border: 1px solid black;
    padding: .5rem;
  }
</style>