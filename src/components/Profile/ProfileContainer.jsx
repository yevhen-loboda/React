import React from "react";
import s from './Profile.module.css';

import Profile from "./Profile";
// import axios from 'axios';
import {connect} from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import withRouter from "./WithRouter";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
// import { usersAPI } from "../../api/api";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if(!userId) {
        // this.props.history.push("login");
      }
    }
    this.props.getUserProfile(userId);
   
      this.props.getStatus(userId);
    
   
  }
  render() {
    return (<div className={s.content}>
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    </div>
    )

  }
  
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
  connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)
