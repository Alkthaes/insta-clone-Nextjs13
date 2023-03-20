import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

export default function Post({ img, userImg, caption, username, id }) {
  return (
    <div className=''>
      <div className='flex items-center p-5 justify-between bg-white my-7'>
        <div className='flex items-center'>
          <img
            className='h-12 w-12 rounded-full object-cover border p-1 mr-3'
            src={userImg}
            alt={username}
          />
          <p className='font-bold '>{username}</p>
        </div>
        <BsThreeDots className='h-5' />
      </div>
      <img className='object-cover w-full' src={img} alt={caption} />
    </div>
  );
}
