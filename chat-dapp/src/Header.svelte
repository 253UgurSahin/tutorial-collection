<script>
    import { user, username } from "./user";

    function signout() {
        user.leave();
        username.set('');
    }
</script>

<header>
    <h1>PIEWpiew</h1>
    {#if $username}
        <div class="user-bio">
            <span>Hello <strong>{$username}</strong></span>
            <img src={`https://avatars.dicebear.com/api/initials/${$username}.svg`} alt="user-avatar">
        </div>

        <button class="btn-signout" on:click={signout}>Sign out</button>    
    {:else}
        <h3>Gun.js Chat</h3>
    {/if}
</header>
