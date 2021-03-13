import React , { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { login, logout, selectUser} from "./features/userSlice";
import Feed from './component/Feed/Feed';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import Login from './component/Login/Login';
import { auth } from './fiirebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])
  
  return (
    <div className="app">
        <Header />

        {!user? (
          <Login />
        ): (
          <div className='app__body'>
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
        )}
    </div>
  );
}

export default App;
