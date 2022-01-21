<script>
    let username = "";
    let password = "";
    let validUsername = "Developyn";
    let validPassword = "Password1";
    let loggedIn = false;
    let errored = false;
    let missing = false;

    let login = () => {
        if (username === validUsername && password === validPassword) {
            loggedIn = true;
            errored = false;
            missing = false;
            return;
        } else if (username === "" || password === "") {
            missing = true;
            loggedIn = false;
            errored = false;
            return;
        } else {
            errored = true;
            loggedIn = false;
            missing = false;
            return;
        }
    };
</script>

<form id="submitForm" class="submit-form" action="/">
    <div class="input-control">
        <label class="submit-label" for="username">Username:</label>
        <input
            type="text"
            name="username"
            id="username"
            class="signup-inputs"
            bind:value={username}
            placeholder="Developyn"
            required
        />
    </div>
    <div class="input-control">
        <label class="submit-label" for="password">Password:</label>
        <input
            type="password"
            name="password"
            id="password"
            class="signup-inputs"
            bind:value={password}
            placeholder="Password1"
            required
        />
    </div>
    <div>
        <button id="submit" type="submit" on:click|preventDefault={login}
            >Submit</button
        >
        {#if loggedIn}
            <div id="validated" class="success-style" v-if="loggedIn">
                Log in Successful!
            </div>
        {/if}
        {#if errored}
            <div id="validated" class="fail-style" v-if="logError">
                Incorrect Login
            </div>
        {/if}
        {#if missing}
            <div id="validated" class="fail-style" v-if="logError">
                Please fill in the fields
            </div>
        {/if}
    </div>
</form>

<style scoped>
    .submit-form {
        text-align: center;
        color: white;
        width: 100%;
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .input-control {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }
    .signup-inputs {
        width: 75%;
        height: 1.5rem;
        border-radius: 1.5rem;
        padding-left: 0.625rem;
        color: black;
    }
    .submit-label {
        float: left;
        padding-left: 1.5rem;
    }
    .success-style {
        background-color: darkgreen;
        width: 50%;
        height: 2rem;
        border: 0.1rem #fff solid;
        color: white;
        border-radius: 1.5rem;
        padding-top: 0.8rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        font-size: small;
    }
    .fail-style {
        background-color: darkred;
        width: 50%;
        height: 2rem;
        border: 0.1rem #fff solid;
        color: white;
        border-radius: 1.5rem;
        padding-top: 0.8rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        font-size: small;
    }
</style>
