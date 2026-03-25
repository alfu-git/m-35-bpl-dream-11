import React from 'react';
import './Player.css'
import PlayerIcon from '../../../assets/user 1.png';

const Player = ({player}) => {
  return (
    <div className='border border-[#131313]/10 rounded-2xl p-6'>
      <div className='mb-6 h-60 sm:h-80 md:h-60 lg:h-80 xl:h-60'>
        <img 
          src={player.playerImg} 
          alt={`${player.playerName} Image`} 
          title={player.playerName} 
          className='w-full h-full object-cover overflow-hidden rounded-2xl' 
        />
      </div>
      
      <div className='mb-4 flex gap-4 items-center'>
        <img src={PlayerIcon} alt="Player Icon" />
        <h3 className='text-xl font-semibold'>{player.playerName}</h3>
      </div>

      <div className='flex justify-between items-center border-b border-[#131313]/10 pb-4'>
        <div className='flex items-center gap-3'>
          <img 
            className={`
                w-8 h-5
                ${player.playerCountry === "India" ?   
                  'india-glow' :
                  player.playerCountry === "England" ?
                  'england-glow' :
                  player.playerCountry === "Afghanistan" ?
                  'afghanistan-glow' :
                  player.playerCountry === "Sri Lanka" ?
                  'sri-lanka-glow' :
                  'blue-glow'
                }
              `}
            src={player.FlagImg} 
          />
          <span className='opacity-50'>{player.playerCountry}</span>
        </div>

        <span className='py-2 px-4 bg-[#131313]/5 rounded-lg'>{player.playerType}</span>
      </div>

      <span className='inline-block mt-4 font-bold'>
        Rating: {player.rating}
      </span>

      <div className='mt-4 mb-3 flex justify-between items-center'>
        <span
          className={player.playerType === "Bowler" ? 'opacity-70' : ''}
        >
          {player.battingStyle}
        </span>

        <span
          className={player.playerType === 'Batsman' ? 'opacity-70' : ''}
        >
          {player.bowlingStyle !== "None" && player.bowlingStyle}
        </span>
      </div>

      <div className='flex justify-between items-center'>
        <span className='font-semibold'>
          Price: ${player.price}M
        </span>
        <button className='btn text-sm'>
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default Player;