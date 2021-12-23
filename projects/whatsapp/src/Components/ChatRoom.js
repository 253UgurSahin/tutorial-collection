import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase, { auth, firestore } from '../firebase';
import ChatMessage from '../firebase';

export default function ChatRoom() {
    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formVal, setFormVal] = useState('');

    const sendMSG = async (e) => {
        e.preventDefault();
        const {uid, photoURL} = auth.currentUser;

        await messageRef.add({
            text: formVal,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimeStamp(),
        });

        setFormVal('')
    }

    return (
        <>
            <div>
                { messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />) }
            </div>

            <form onSubmit={sendMSG}>
                <input value={formVal} onChange={(e) => setFormVal(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
