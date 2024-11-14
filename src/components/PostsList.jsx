import { useState } from 'react';
import Post from './Post'
import classes from './PostList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

function PostList({isPosting, onStopPosting }) {
  const [posts,setPosts]=useState([]);
  function addPostHandler(postData) {
    setPosts((existingPosts)=> [postData,...existingPosts]);
  }
    
  
    return (
        <>
        {isPosting && (
           <Modal onClose = {onStopPosting}>
           <NewPost 
            onCancel = {onStopPosting } onAddPost={addPostHandler}
           />
         </Modal>

        )}
        <ul className={classes.posts}>
          <Post author ="Ayhem" body=" check out the full course!!"/>
        </ul>
        </>
        
    )
     

}
export default PostList ;