import React, { use, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "./players.css";
import Player from "./Player/Player";
import EmptyContent from "./EmptyContent/EmptyContent";
import SelectedPlayer from "./SelectedPlayer/SelectedPlayer";

const Players = ({ playersPromise, dollar, setDollar }) => {

  const playersData = use(playersPromise);

  const [status, setStatus] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const getPlayer = (player) => {

    const isExists = selectedPlayers.find(p => p.playerName === player.playerName);

    if (!isExists) {
      setSelectedPlayers([...selectedPlayers, player]);
    }

    setDollar(dollar - player.price);

    toast(
      <p className="space-x-1">
        <span className="text-fuchsia-600 font-bold">
          {player.playerName}
        </span>
        <span>is selected successfully</span>
      </p>
    );
  }


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
                (<span>{selectedPlayers.length}</span>
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
              (<span>{selectedPlayers.length}</span>)
            </span>
          </button>
        </div>
      </div>

      <div>
        {status ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {playersData.map((player, index) => (
              <Player key={index} player={player} getPlayer={getPlayer} />
            ))}
          </div>
        ) : (
          <div>
            {
              selectedPlayers.length === 0 && (
                <div>
                  <EmptyContent />
                </div>
              )
            }

            <div className="space-y-6">
              <SelectedPlayer selectedPlayers= {selectedPlayers} />
            </div>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Players;
