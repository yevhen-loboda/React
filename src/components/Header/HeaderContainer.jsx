import React from "react";
import Header from "./Header";
// import axios from 'axios';
import {connect} from "react-redux";
import { logout } from "../../redux/auth-reducer";
// import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  // componentDidMount() {
  //   this.props.getAuthUserData();
  // }

  render() {
    return <Header {...this.props}/>
  }
   
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,

});

export default connect(mapStateToProps,{logout})(HeaderContainer);