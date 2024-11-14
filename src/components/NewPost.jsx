import classes from './NewPost.module.css'
import { useState } from 'react';
function NewPost (onCancel,onAddPost) {
    const  [ enteredBody ,setEntredBody]= useState('');
    const  [ enteredAuthor ,setEntredAuthor]= useState('');

   
    function bodyChangeHandler(event) {
        setEntredBody(event.target.value);
    }

    function authorChangeHandler(event) {
      setEntredAuthor(event.target.value);
    }

    function submitHandler (event){
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        console.log(postData)
        onAddPost(postData)
        onCancel() 

    }
    
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body' required rows={3} onChange={bodyChangeHandler}/>
            </p>
           
            <p>
                <label htmlFor='name'>Your name</label>
                <textarea id='name' required onChange={authorChangeHandler}/>
            </p>
            <p className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button>Submit</button>
            </p>

        </form>

    );
}
export default NewPost;