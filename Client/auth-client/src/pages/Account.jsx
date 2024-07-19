import React from 'react';
import {useNavigate} from 'react-router-dom';  // <-- Importing useHistory

import Button from '@mui/material/Button';

function Account() {
  const navigate = useNavigate();

  const goToLobby = () => {
    navigate('/Lobby');
  };

  return (
    <div className='w-full h-screen bg-[#1a1a1a] text-white flex justify-center items-center'>
      <h2 className='text-3xl'>ACCOUNT</h2>
      <Button variant="contained" onClick={goToLobby}>
        Go to the Lobby Screen
      </Button>
    </div>
  );
}

export default Account;