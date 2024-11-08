import { useState } from 'react';
import Post from './Post'
import classes from './PostList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

function PostList() {
    const  [ enteredBody ,setEntredBody]= useState('');
    const  [ enteredAuthor ,setEntredAuthor]= useState('');

    function bodyChangeHandler(event) {
        setEntredBody(event.target.value);
    }

    function authorChangeHandler(event) {
      setEntredAuthor(event.target.value);
  }
    return (
        <>
        <Modal>
          <NewPost 
           onBodyChange={bodyChangeHandler} 
           onAuthorChange={authorChangeHandler}
          />
        </Modal>
        
        <ul className={classes.posts}>
          <Post author ={enteredAuthor} body={enteredBody}/>
          <Post author ="Ayhem" body=" check out the full course!!"/>
        </ul>
        </>
        
    )
     

}
export default PostList ;