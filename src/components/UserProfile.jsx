import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileData } from '../store/EventReducer';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {

const[toggle , setToggle] = useState(false); 

const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
}

const dispatch = useDispatch();    
const navigate = useNavigate();

const ACCESS_TOKEN = localStorage.getItem('access_token');

const fetchProfile = () => {
    fetch(`https://api.escuelajs.co/api/v1/auth/profile` , {
        method:'GET',
        headers:{
            "Authorization": `Bearer ${ACCESS_TOKEN}`
        }
    })
    .then(res => res.json())
    .then(data => dispatch(setProfileData(data)));
}

const handleLogout = () => {
    localStorage.clear();
    navigate('/');
}


useEffect(() => {
    fetchProfile();
} , [])

const{profileDetails} = useSelector(state => state.Events);

  return (
     <div className='relative flex justify-center gap-2 mr-5 ml-5'>
       <div className='flex justify-center items-center'>
            <img
            src={profileDetails.avatar}
            alt="avatar Evan You"
            onClick={handleToggle}
            className="w-16 h-16 shrink-0 rounded-full"
            />
       </div>
       <p className='flex justify-center items-center'>{profileDetails.name}</p>
       <div className={toggle ? 'absolute top-full' : 'hidden'}>
       <button onClick={handleLogout} class=" m-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Logout
       </button>
       </div>
     </div>
  )
}

export default UserProfile;
