import GameCard from "@components/features/gameCard/GameCard";
import useFetchGames from "@hooks/useFetchGames";
import { GameType } from "@utils/GameType";

/**
 * A container for the game cards
 * @returns {JSX.Element} The game container
 */
const GameContainer = () => {
    // Fetch the games
    const { games } = useFetchGames();

    return (
        <div className='flex items-center justify-center mt-24 flex-col'>
            <h1 className='text-xl'>Games</h1>
            <div className='mt-5 w-3/4 h-max flex flex-wrap gap-5'>
                {games?.map((game: GameType) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
};

export default GameContainer;