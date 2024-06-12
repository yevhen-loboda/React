import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from "../../../utils/Validators/validators";
import { TextArea } from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo((props) => {
  console.log("RENDER")
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  // let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return <div className={s.content}>Main content

    <div className={s.postsBlock}><h3>My posts</h3></div>
    <AddNewPostFormRedux onSubmit={onAddPost}/>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>
});

const maxLength10 = maxLengthCreator(10)
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
    <div>
      <Field name="newPostText" component={TextArea} placeholder="Post message"
      validate={[required, maxLength10]} />
    </div>
    <div>
      <button>Add Post</button>
    </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;