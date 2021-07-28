import React, { useState, useEffect } from 'react'
import '../Style/Home.css'
import Post from './Post'
import {db} from '../firebase'
import firebase from 'firebase'
import NftUp from './NftUp'

function Home() {
    const [post, setPost] = useState([])

    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
            setPost(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
            })));
        })
     }, []);



    return (
        <div className="home">
            <div className="home_posts">

             <NftUp/>

              {post.map(({ id, post }) => (
                  <Post
                  key={id}
                  username={post.username}
                  description={post.description}
                  avatar={post.avatar}
                  image={post.image}/>
              ))}  
              

              
            </div>
        </div>
    )
}

export default Home
