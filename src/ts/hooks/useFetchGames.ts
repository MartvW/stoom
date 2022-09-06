import { getGames } from "@repository/gamesRepository";
import { useQuery } from 'react-query';

/**
 * Hook to fetch all games
 * @returns The games
 */
const useFetchGames = () => {
    const { data, isLoading, isError } = useQuery(['games'], () => getGames(), {
        refetchInterval: 1000 * 60 * 60,
    });
    return { games: data, isLoading, isError };
};

export default useFetchGames;