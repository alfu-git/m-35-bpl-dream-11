import React, { use} from 'react';
import './players.css';
import Player from './Player/Player';

const Players = ({playersPromise}) => {
  const playersData = use(playersPromise);
  console.log(playersData);

  return (
    <div>
      <div className='mb-8'>
        <h2 className='text-[28px] font-bold'>Available Players</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          playersData.map((player, index) => <Player key={index} player={player} />)
        }
      </div>
    </div>
  );
};

export default Players;