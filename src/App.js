import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, Routes } from 'react-router-dom';
import { connect } from "react-redux";
// import { getAuthUserData } from "./redux/auth-reducer";
import Nba from './components/Nba/Nba';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import {initializeApp} from "./redux/app-reducer"
import Preloader from './components/common/Preloader/Preloader';
import store  from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
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
            <Route path='/dialogs' element={<React.Suspense fallback={<div>Loading...</div>}><DialogsContainer /></React.Suspense>} />
            <Route path='/profile/:userId?' element={<React.Suspense fallback={<div>Loading...</div>}><ProfileContainer /></React.Suspense>} />
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



// export default connect(mapStateToProps, {initializeApp})(App);
let AppContainer = connect(mapStateToProps, {initializeApp})(App);

 const SamuraiJSApp = (props) => {
  return <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
        {/* <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/> */}
        <AppContainer />
        </Provider>
      </React.StrictMode>
      </BrowserRouter>
}


export default SamuraiJSApp;