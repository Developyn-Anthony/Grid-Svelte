<script>
    import { rows } from "../storage.js";

    let rows_value;
    const columns = ["First Name", "Last Name", "Age"];

    rows.subscribe((value) => {
        rows_value = value;
    });

    function removeRow(index) {
        rows.set(rows_value.filter((row) => row != index));
    }
</script>

<div class="table-container">
    <table border="3" class="table">
        <thead>
            <tr class="change-column">
                {#each columns as column}
                    <th>{column}</th>
                {/each}
                <th />
            </tr>
        </thead>
        <tbody>
            {#each rows_value as row}
                <tr class="remove-row">
                    {#each row as cell}
                        <td class="row-data" contenteditable="true" bind:innerHTML={cell} />
                    {/each}
                    <td>
                        <button class="del-btn" on:click={removeRow(row)}>X</button></td
                    >
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style scoped>
    .table {
        color: #fff;
        width: 95%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
    }

    .row-data {
        padding-left: 0.3rem;
    }

    .del-btn {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: darkred;
        color: #fff;
    }
</style>
