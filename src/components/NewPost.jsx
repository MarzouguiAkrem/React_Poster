import { useState } from 'react';
import classes from './NewPost.module.css'

function NewPost () {
    const  [ enteredBody ,setEntredBody]= useState('');
    function changeBodyHandler(event) {
        setEntredBody(event.target.value);
    }
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body' required rows={3} onChange={changeBodyHandler}/>
            </p>
            <p>{enteredBody}</p>
            <p>
                <label htmlFor='name'>Your name</label>
                <textarea id='name' required/>
            </p>

        </form>

    );
}
export default NewPost;