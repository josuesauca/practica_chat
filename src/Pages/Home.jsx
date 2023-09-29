import React from 'react'
import { Chat } from '../Components/Chat';
import { Sidebar } from '../Components/Sidebar';

export const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar></Sidebar>
        <Chat></Chat>    

      </div>

    </div>
  );
}
