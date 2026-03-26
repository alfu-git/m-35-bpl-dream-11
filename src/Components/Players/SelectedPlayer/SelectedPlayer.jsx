import { Trash2 } from "lucide-react";
import React from "react";

const SelectedPlayer = ({ selectedPlayers }) => {
  console.log(selectedPlayers);

  return selectedPlayers.map((player) => (
    <div key={player.playerName} className="p-4 border border-[#131313]/10 rounded-2xl flex justify-between items-center">
      <div className="flex items-center gap-6">
        <div>
          <img className="w-40 h-30 object-cover rounded-2xl" src={player.playerImg} />
        </div>

        <div>
          <h3 className="mb-3 text-2xl font-bold">{player.playerName}</h3>

          <span className="block mb-1 text-lg font-semibold">{player.playerType}</span>

          <span className="opacity-60">
            {player.playerType === "Batsman"
              ? player.battingStyle
              : player.playerType !== 'None' && player.playerType === "Bowler"
                ? player.bowlingStyle
                : `${player.battingStyle}, ${player.bowlingStyle}`}
          </span>
        </div>
      </div>

      <div className="mr-5">
        <button className="btn w-14 h-14 rounded-full">
          <Trash2 className="text-[#F14749]" />
        </button>
      </div>
    </div>
  ));
};

export default SelectedPlayer;
