import { useState, useEffect } from 'react';
import { storage, firestore } from '../firebase';

export default function useStorage(file) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = storage.ref(file.name);
        const collectionRef = firestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = new Date().getTime();
            collectionRef.add({ name: file.name, url, createdAt })
            setUrl(url);
        });
    }, [file]);

    return { progress, error, url};
}