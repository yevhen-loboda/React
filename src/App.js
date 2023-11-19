import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
// import Dialogs from './components/Dialogs/Dialog';
import { Route, Routes } from 'react-router-dom';
import Nba from './components/Nba/Nba';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {

  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/nba' element={<Nba />} />
            {/* <Route path='/dialogs' element={<DialogsContainer store={props.store}/>} />
            <Route path='/profile' element={<Profile store={props.store}/>} />
            <Route path='/nba' element={<Nba store={props.store}/>} /> */}
          </Routes>
        </div>
      </div>
  );
}



export default App;
