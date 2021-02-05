import { ColumnDefinition } from "../Interfaces/ColumnDefinition"

export class RowDefinitionFactory {
    public static create(row: Object, editable: boolean = false) {
        const columns: ColumnDefinition[] = Object.values(row).map(colum => {
            return {editable, value: colum};
        });
        return {
            columns
        };
    }
}