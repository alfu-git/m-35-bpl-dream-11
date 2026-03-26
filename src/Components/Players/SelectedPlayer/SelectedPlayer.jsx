import { Trash2 } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";
import './SelectedPlayer.css';

const SelectedPlayer = ({ selectedPlayers, setSelectedPlayers, dollar, setDollar }) => {

  const removePlayer = (player) => {
    const removeP = selectedPlayers.filter(p => p.playerName !== player.playerName);
    setSelectedPlayers(removeP);
    setDollar(dollar + player.price);

    toast.error(
          <p className="space-x-1 text-sm sm:text-base">
            <span className="font-semibold">
              {player.playerName}
            </span>
            <span>is</span>
            <span className="text-red-600 font-bold">removed</span>
          </p>
        );
  }

  return selectedPlayers.map((player) => (
    <div key={player.playerName} className="p-3 md:p-4 rounded-2xl flex justify-between sm:items-center card-shadow">
      <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6">
        <div>
          <img className="w-30 h-30 md:w-40 md:h-40 object-cover rounded-2xl" src={player.playerImg} />
        </div>

        <div>
          <h3 className="md:mb-3 text-xl md:text-2xl font-bold">{player.playerName}</h3>

          <span className="block md:mb-1 md:text-lg font-semibold">{player.playerType}</span>

          <span className="text-sm md:text-base opacity-60">
            {player.playerType === "Batsman"
              ? player.battingStyle
              : player.playerType !== 'None' && player.playerType === "Bowler"
                ? player.bowlingStyle
                : `${player.battingStyle}, ${player.bowlingStyle}`}
          </span>
        </div>
      </div>

      <div className="mr-5">
        <button 
          onClick={() => removePlayer(player)}
          className="btn p-0 w-10 h-10 md:w-14 md:h-14 rounded-full"
        >
          <Trash2 className="text-[#F14749]" />
        </button>
      </div>
    </div>
  ));
};

export default SelectedPlayer;
