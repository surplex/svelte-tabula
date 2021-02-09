import { RowDefinition } from "../RowDefinition";

export interface EditEvent {
    rowDefinition: RowDefinition;
    value: string;
    rawEvent: Event;
}