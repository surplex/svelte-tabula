import { HeaderDefinition } from "../HeaderDefinition";

export type Sort = "asc" | "desc" | "normal";
export interface SortEvent {
    headerDefinition: HeaderDefinition;
    sort: Sort;
    rawEvent: Event;
}