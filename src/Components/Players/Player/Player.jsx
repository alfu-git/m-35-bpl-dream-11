import "./Player.css";
import PlayerIcon from "../../../assets/user 1.png";

const Player = ({ player, getPlayer, selectedPlayers }) => {
  const isSelected = selectedPlayers.find(
    (p) => p.playerName === player.playerName,
  );

  const handleChooseBtn = () => {
    if (!isSelected) {
      getPlayer(player);
    }
  };

  return (
    <div 
      className={`
        rounded-2xl p-3 sm:p-6
        ${
          isSelected ? "border-l-3 border-green-500" : "border border-[#131313]/10"
        }
        `}
    >
      <div className="mb-3 sm:mb-6 h-60 sm:h-80 md:h-60 lg:h-80 xl:h-60">
        <img
          src={player.playerImg}
          alt={`${player.playerName} Image`}
          title={player.playerName}
          className="w-full h-full object-cover overflow-hidden rounded-2xl"
        />
      </div>

      <div className="mb-2 sm:mb-4 flex gap-4 items-center">
        <img className="w-5 sm:w-7" src={PlayerIcon} alt="Player Icon" />
        <h3 className="text-xl font-semibold">{player.playerName}</h3>
      </div>

      <div className="pb-4 flex justify-between items-center border-b border-[#131313]/10">
        <div className="flex items-center gap-3">
          <img
            className={`
                w-8 h-5
                ${
                  player.playerCountry === "India"
                    ? "india-glow"
                    : player.playerCountry === "England"
                      ? "england-glow"
                      : player.playerCountry === "Afghanistan"
                        ? "afghanistan-glow"
                        : player.playerCountry === "Sri Lanka"
                          ? "sri-lanka-glow"
                          : "blue-glow"
                }
              `}
            src={player.FlagImg}
          />
          <span className="opacity-50">{player.playerCountry}</span>
        </div>

        <span 
          className={`
            py-2 px-4  rounded-lg
            ${
              player.playerType === 'Batsman' ? "bg-emerald-200" :
              player.playerType === 'Bowler' ? "bg-lime-200" :
              player.playerType === 'All-rounder' ? "bg-purple-300" :
              "bg-rose-200"
            }
            `}>
          {player.playerType}
        </span>
      </div>

      <span className="inline-block mt-5 sm:mt-4 font-bold">
        Rating: {player.rating}
      </span>

      <div className="mt-2 sm:mt-4 mb-3 flex justify-between items-center">
        <span className={`
            text-sm sm:text-base
            ${player.playerType === "Bowler" ? "opacity-70" : ""}
          `}>
          {player.battingStyle}
        </span>

        <span className={`
            text-sm sm:text-base
            ${player.playerType === "Batsman" ? "opacity-70" : ""}
          `}>
          {player.bowlingStyle !== "None" && player.bowlingStyle}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-semibold">Price: ${player.price}M</span>
        <button
          onClick={handleChooseBtn}
          disabled={isSelected || selectedPlayers.length === 11}
          className="btn px-3 sm:px-4"
        >
          {isSelected
            ? "Selected"
            : selectedPlayers.length === 11
              ? "Full"
              : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default Player;
