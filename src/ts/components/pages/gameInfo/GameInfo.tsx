import GameCard from "@components/features/gameCard/GameCard";
import useFetchGame from "@hooks/useFetchGame";
import { GameType } from "@utils/GameType";
import { useParams } from "react-router-dom";

/**
 * Information about the game
 * @param {string} id The id of the game
 * @returns {JSX.Element} The game info
 */
const GameInfo = () => {
    const { id } = useParams() as { id: string; };
    // Fetch single game by id
    const { game } = useFetchGame(id) as { game: GameType; };

    return (
        <div className='mt-24'>
            <GameCard game={game} />
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-md'>Players: <span className='font-bold'>{game?.players}</span></h1>
                <h1 className='text-md'>Price: <span className='font-bold'>€{game?.price}</span></h1>
                <h1 className='text-md'>Time: <span className='font-bold'>{game?.time}</span></h1>
            </div>
        </div>
    );
};

export default GameInfo;