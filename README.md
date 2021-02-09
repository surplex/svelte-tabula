# Tabula
A Table Component with some batteries included.

## Index
* [Features](#features)
* [Installation](#installation)
* [Examples](#examples)

## Features


## Installation


## Examples

### Simple usage
```svelte
<script lang="ts">
    import { Table, Header, Row } from "surplex/svelte-tabula";
    const data: any[] = [
        {id: 1, name: "Daniel", jobTitle: "Software craftsman"},
        {id: 3, name: "Max", jobTitle: "Head of Development"},
        {id: 2, name: "Mustermann", jobTitle: "Tester"},
    ];
    const headerDefinitions: HeaderDefinition[] = [
        {prop: "id", name: "Id", editable: false, sortable: true, filterable: true},
        {prop: "name", name: "Name", editable: true, sortable: true, filterable: true},
        {prop: "jobTitle", name: "Job Title", editable: false, sortable: false, filterable: false},
    ];
</script>
<Table>
    <Header slot="head" {headerDefinitions}/>
    {#each data as row}
        <Row data={row} />
    {/each}
</Table>
```

### Modify the editable property at column level
```svelte
<script lang="ts">
    import { Table, Header, Row, Column, FilterEvent } from "surplex/svelte-tabula";
    const data: any[] = [
        {id: 1, name: "Daniel", jobTitle: "Software craftsman"},
        {id: 3, name: "Max", jobTitle: "Head of Development"},
        {id: 2, name: "Mustermann", jobTitle: "Tester"},
    ];
    const headerDefinitions: HeaderDefinition[] = [
        {prop: "id", name: "Id", editable: false, sortable: true, filterable: true},
        {prop: "name", name: "Name", editable: true, sortable: true, filterable: true},
        {prop: "jobTitle", name: "Job Title", editable: false, sortable: false, filterable: false},
    ];
</script>
<Table>
    <Header slot="head" on:sort={() => data.sort()} on:filter={(event: FilterEvent) => {}} {headerDefinitions}/>
    {#each data as row}
        <Row>
            <!-- slot name equals prop value in HeaderDefinition -->
            <td slot="name">Daniel</td>
        </Row>
    {/each}
</Table>
```

### Styling
Tabula uses the defined table structure in [html53](https://www.w3.org/TR/html53/tabular-data.html#tabular-data).  
Pass an `options` object to the `<Table>` component to modify the different elements inside the table.
```svelte
<script lang="ts">
// ...
const styling: Object = {
    table: ['table-class'],
    td: ['bg-gray-500', 'hover:bg-gray-700']
};
</script>
<Table {options}>
</Table>
```
