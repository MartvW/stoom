import { getGameById } from "@repository/gamesRepository";
import { useQuery } from 'react-query';

/**
 * Hook to fetch a game by id
 * @param id The id of the game
 * @returns The game
 */
const useFetchGame = (id: string) => {
    const { data, isLoading, isError } = useQuery(['game', id], () => getGameById(id), {
        refetchInterval: 1000 * 60 * 60,
    });
    return { game: data, isLoading, isError };
};

export default useFetchGame;