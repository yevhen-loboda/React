import React from "react";
import {connect} from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from "../../redux/users-reducer";
import Users from './Users.jsx';
import Preloader from './../common/Preloader/Preloader';
import { compose } from "redux";
import { getIsFetching, getCurrentPage, getTotalUsersCount, getFollowingInProgress, getPageSize, getNewUsers } from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount () {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true)
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items);
        // });
    }

    // getUsers = () => {
    //     if(this.props.users.length === 0) {
    //         axios.get(" https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items);
    //         });
    //     }
    // }
    
render(){

    return <>
    {this.props.isFetching ? 
    <Preloader /> : null}
    <Users totalUsersCount={this.props.totalUsersCount} 
           pageSize={this.props.pageSize}    
           currentPage={this.props.currentPage} 
           onPageChanged={this.onPageChanged}
           users={this.props.users} 
           follow={this.props.follow}
           unfollow={this.props.unfollow}
        //    toggleFollowingProgress={this.props.toggleFollowingProgress}
           followingInProgress={this.props.followingInProgress}
     />
     </>

}
}


// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getNewUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    // withAuthRedirect,
     connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})

)(UsersContainer)