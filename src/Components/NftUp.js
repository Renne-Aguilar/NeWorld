import React, { useState } from 'react'
import { db, storage } from '../firebase'
import firebase from 'firebase'
import { Button, Avatar } from '@material-ui/core'
import '../Style/NftUp.css'

function NftUp() {
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };



    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                .ref('images')
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection('posts').add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        description: description,
                        image: url,
                        username: 'Wonderful artist',
                        avatar: 'https://images.unsplash.com/photo-1494249465471-5655b7878482?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                        verified: true
                    });

                    setProgress(0);
                    setDescription('');
                    setImage(null);
                });
            }
        );
        
    };


    return (
        <div className="nft">
            <form>
                <div className="nft_input">
                <Avatar src="https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>


                <progress value={progress} max='100'/>
                <input
                onChange={event => setDescription(event.target.value)}
                value={description}
                placeholder="Tell us about your NFT" type="text"/>
                </div> 

                <input
                onChange={handleChange} 
                type="file"/>

                 <Button 
                 onClick={handleUpload}
                 className="nft_button">
                 Share NFT
                 </Button>       
                
            </form>

        </div>
    )
}

export default NftUp
