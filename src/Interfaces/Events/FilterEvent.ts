import { HeaderDefinition } from "../HeaderDefinition";

export interface FilterEvent {
    headerDefinition: HeaderDefinition;
    filter: string;
    rawEvent: Event;
}