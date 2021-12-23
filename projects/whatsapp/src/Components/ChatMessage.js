import React from 'react';
import { auth } from '../firebase';
 
export default function ChatMessage({ message }) {
    const { text, uid, photoURL } = message;
    const msgClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${msgClass}`}>
            <img src={photoURL}/>
            <p>{ text }</p>
        </div>
    )
}
