import { ColumnDefinition } from "../ColumnDefinition";

export interface EditEvent {
    columnDefinition: ColumnDefinition;
    value: string;
    rawEvent: Event;
}