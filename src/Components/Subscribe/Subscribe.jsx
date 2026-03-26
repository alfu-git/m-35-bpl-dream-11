import React from 'react';
import BgShadow from '../../assets/bg-shadow.png';

const Subscribe = () => {
  return (
    <div>
      <div 
        style={{
          background: "#ffffff",
          backgroundImage: `url(${BgShadow})`
        }}
        className='py-22 px-5 border border-[#131313]/10 rounded-3xl bg-no-repeat bg-cover flex justify-center items-center'
      >
        <div className='text-center'>
          <h2 className='mb-4 text-3xl font-bold'>Subscribe to our Newsletter</h2>
          <p className='mb-6 text-xl font-medium opacity-70'>Get the latest updates and news right in your inbox!</p>
          <form className='flex gap-4 flex-col sm:flex-row justify-center'>
            <input 
              type="email" 
              placeholder='Enter your email'
              className='inline-block py-4 pl-7 bg-base-100 border border-[#131313]/10 rounded-xl'
            />
            <button 
              type="submit"
              className='inline-block py-4 px-7 bg-linear-to-r from-[#DF82AE] to-[#F6C750] rounded-xl font-bold cursor-pointer'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;