import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, Routes } from 'react-router-dom';
import { connect } from "react-redux";
// import { getAuthUserData } from "./redux/auth-reducer";
import Nba from './components/Nba/Nba';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import {initializeApp} from "./redux/app-reducer"
import Preloader from './components/common/Preloader/Preloader';
// function App(props) {

//   return (
//       <div className="app-wrapper">
//         <HeaderContainer />
//         <Navbar />
//         <div className='app-wrapper-content'>
//           <Routes>
//             <Route path='/dialogs' element={<DialogsContainer />} />
//             <Route path='/profile/:userId?' element={<ProfileContainer />} />
//             <Route path='/users' element={<UsersContainer />} />
//             <Route path='/login' element={<LoginPage />} />
//             <Route path='/nba' element={<Nba />} />

//             {/* <Route path='/dialogs' element={<DialogsContainer store={props.store}/>} />
//             <Route path='/profile' element={<Profile store={props.store}/>} />
//             <Route path='/nba' element={<Nba store={props.store}/>} /> */}
//           </Routes>
//         </div>
//       </div>
//   );
// }

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized){
      return <Preloader />
    }
    
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile/:userId?' element={<ProfileContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/nba' element={<Nba />} />

            {/* <Route path='/dialogs' element={<DialogsContainer store={props.store}/>} />
            <Route path='/profile' element={<Profile store={props.store}/>} />
            <Route path='/nba' element={<Nba store={props.store}/>} /> */}
          </Routes>
        </div>
      </div>
  );
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})



export default connect(mapStateToProps, {initializeApp})(App);
