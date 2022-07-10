import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

// const initialState = {
//   userValue: true,
//   value: {
//     name: "Anshuman",
//     email: "anshumansinghbasnet@gmail.com",
//     image: "https://lh3.googleusercontent.com/ogw/ADea4I5J7p2UZdpnTyuuDBNWXM0WbbGtrtar5aCi2EZp3w=s32-c-mo",
//     mobile: 8756257922,
//     address: "Lucknow"
//   }
// };

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  

  useEffect(() => {

    const getUser = () => {
      axios.get("http://localhost:8080/auth/login/success", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        }
      })
        .then(res => { 
          console.log(res.data)
        })
        .catch(err => { 
          console.log(err);
        })
    }

    getUser();

    if (!user) {
      navigate("/login");
    } 
  }, [user]);

  return (
    <div className='w-full h-full'>
      <Navbar user={user} />
      <Routes>
        <Route  path='/' element ={<Profile user={user} />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App