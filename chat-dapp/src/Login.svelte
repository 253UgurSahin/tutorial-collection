<script>
    import { user } from "./user";

    let username;
    let password;

    function login() {
        user.auth(username, password, ({ err }) => err && alert(err));
    }

    function signup() {
        user.create(username, password, ({ err }) => {
            if (err) {
                alert(err);
            } else {
                login();
            }
        });
    }
</script>

<label for="username">Username:</label>
<input type="text" name="username" bind:value={username} minlength="3" maxlength="16" />

<label for="password">Password:</label>
<input type="text" name="password" bind:value={password} />

<button class="btn-login" on:click={login}>Login</button>
<button class="btn-signup" on:click={signup}>Sign Up</button>