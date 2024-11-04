import Post from './Post'
import classes from './PostList.module.css';

function PostList() {
    return (
        <ul className={classes.posts}>
          <Post author ="Akrem" body=" Ractjs is awsome!"/>
          <Post author ="Ayhem" body=" check out the full course!!"/>
    </ul>
    )
     

}
export default PostList ;