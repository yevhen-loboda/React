import React from "react";
import styles from './Users.module.css';
// import axios from 'axios';
import userPhoto from "../../assets/images/user.jpg";
import {usersAPI} from "../../api/api";
import { NavLink } from "react-router-dom";
import Paginator from "./Paginator";

let Users = (props) => {
    // let Users = ({currentPage, totalUseresCount, pageSize, onPageChanged, users, ...props}) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount;i++){
        pages.push(i);
    }

    return <div>
        {/* <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
        totalItemsCount={totalUseresCount} pageSize={pageSize}/> */}
    <div>
       
        {pages.map( p => {
           return <span className={props.currentPage===p && styles.selectedPage} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
        })}

    </div>
    {
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to ={'/profile/' + u.id}>
                    <img src={u.photos.small !=null ? u.photos.small : userPhoto} className={styles.userPhoto}></img>
                    </NavLink>
                    
                </div>
                <div>
                    {u.followed 
                    ? <button diasabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                        props.unfollow(u.id)
                        // props.toggleFollowingProgress(true, u.id)

                        // usersAPI.unfollow( u.id)
                        // .then(response => {
                        //     if(response.data.resultCode == 0){
                        //         props.unfollow(u.id)
                        //     }
                        //     props.toggleFollowingProgress(false, u.id)
                        // });
                        
                        // props.unfollow(u.id)
                    }}>UnFollow</button> 
                    : <button diasabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                        props.follow(u.id)
                    //     props.toggleFollowingProgress(true, u.id)

                    //     usersAPI.follow( u.id)
                    //    .then(response => {
                    //         if(response.data.resultCode == 0){
                    //             props.follow(u.id)
                    //         }
                    //         props.toggleFollowingProgress(false, u.id)
                    //     });
                        
                        
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                </span>
            </span>

        </div>)
    }
</div> 

}

export default Users;