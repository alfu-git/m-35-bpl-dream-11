import React, { use, useState } from "react";
import "./players.css";
import Player from "./Player/Player";
import EmptyContent from "./EmptyContent/EmptyContent";

const Players = ({ playersPromise }) => {
  const playersData = use(playersPromise);

  const [status, setStatus] = useState(true);

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          {status ? (
            <h2 className="text-[28px] font-bold">Available Players</h2>
          ) : (
            <h2 className="text-[28px] font-bold">
              Selected Player
              <span>
                (<span>0</span>
                <span>/</span>
                <span>{playersData.length}</span>)
              </span>
            </h2>
          )}
        </div>

        <div>
          <button
            onClick={() => setStatus(true)}
            className={`
              btn rounded-lg rounded-r-none ${status ? "bg-[#E7FE29] font-bold" : "bg-none opacity-60"}
            `}
          >
            Available
          </button>

          <button
            onClick={() => setStatus(false)}
            className={`
              btn rounded-lg rounded-l-none ${status ? "bg-none opacity-60" : "bg-[#E7FE29] font-bold"}
            `}
          >
            Selected
            <span>
              (<span>0</span>)
            </span>
          </button>
        </div>
      </div>

      <div>
        {status ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {playersData.map((player, index) => (
              <Player key={index} player={player} />
            ))}
          </div>
        ) : (
          <div>
            <div>
              <EmptyContent />
            </div>

            <div>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Players;
