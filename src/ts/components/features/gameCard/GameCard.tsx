import { GameType } from "@utils/GameType";
import { Link } from "react-router-dom";

type Props = {
    game: GameType;
};

/**
 * A game card which displays the game
 * @param {GameType} game The game to display
 * @returns {JSX.Element} The game card
 */

const GameCard = ({ game }: Props) => (
    <Link to={`/games/${game?.id}`} className="m-5 cursor-pointer hover:scale-105 ease-in-out duration-300 mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 items-center">
        <img className="w-64 h-48 rounded-t-2xl object-cover object-center" src={game?.photo} alt={game?.name} />
        <div className="p-4 w-full flex items-start flex-col">
            <small className="text-blue-400 text-xs">{game?.type}</small>
            <h1 className="text-2xl font-medium text-slate-600 pb-2">{game?.name}</h1>
            <p className="text-sm tracking-tight font-light text-slate-400 leading-6">{game?.age}+</p>
        </div>
    </Link>
);

export default GameCard;