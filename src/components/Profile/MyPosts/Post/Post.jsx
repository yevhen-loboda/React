import React from "react";
import s from './Post.module.css';


const Post = (props) => {
  return <div>
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ9cTfkxnZYQGwL-wKFXeQGC0ba86S2SvgQ&usqp=CAU" alt="" />
      {props.message}
      <div><span>like {props.likesCount}</span></div>
      
    </div>
  </div>
}

export default Post;