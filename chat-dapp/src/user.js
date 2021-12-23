import Gun from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

// DB
export const db = GUN();

// Gun User
export const user = db.user().recall({ sessionStorage: true });

// Current users username
export const username = writable('');

user.get('alias').on(v => username.set(v));

db.on('auth', async (event) => {
    const alias = await user.get('alias'); // username
    username.set(alias);

    console.log(`current username: ${alias}`);
});