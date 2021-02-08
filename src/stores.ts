import { Writable, writable } from "svelte/store";
import { HeaderDefinition } from "./Interfaces/HeaderDefinition";

export const headerDefinitions: Writable<Array<HeaderDefinition>> = writable(new Array<HeaderDefinition>());