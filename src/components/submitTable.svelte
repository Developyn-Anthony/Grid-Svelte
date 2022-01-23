<script>
    import { rows } from "../storage.js";

    let new_person = {
        fName: "",
        lName: "",
        age: "",
    };

    let addPerson = (e) => {
        e.preventDefault();
        rows.update((rows) => [
            ...rows,
            [new_person.fName || "John", new_person.lName || "Doe", new_person.age || "50"],
        ]);
        new_person = {
            fName: "",
            lName: "",
            age: "",
        };
    };
</script>

<div>
    <div>
        <form id="tableSubmitForm" class="table-form" action="/">
            <input
                type="text"
                placeholder="First Name"
                class="table-inputs"
                bind:value={new_person.fName}
            />
            <input
                type="text"
                placeholder="Last Name"
                class="table-inputs"
                bind:value={new_person.lName}
            />
            <input
                type="text"
                placeholder="Age"
                class="table-inputs"
                required
                bind:value={new_person.age}
            /><br />
            <button class="table-button" type="submit" on:click={addPerson}>
                Submit
            </button>
        </form>
    </div>
</div>

<style scoped>
    .table-form {
        width: 100%;
        text-align: center;
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .table-inputs {
        width: 75%;
        height: 1.5rem;
        border-radius: 1.5rem;
        padding-left: 0.625rem;
        color: black;
    }
    .table-button {
        background-color: teal;
        width: 30%;
        height: 2rem;
        border: 0.1rem #fff solid;
        color: white;
        border-radius: 1.5rem;
        transition-duration: 0.5s;
    }

    .table-button:hover {
        background-color: #004e4f; /*DarkTeal*/
        width: 35%;
        height: 2rem;
        border: 0.1rem #fff solid;
        color: white;
        border-radius: 1.5rem;
        transition-duration: 0.5s;
    }
</style>
