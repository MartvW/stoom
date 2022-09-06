import { executeGetRequest } from "@api/client";
import { apiPath, createGamePathWithId } from "@routes/app";

/**
 * Fetch all games
 * @returns The games
 */
export const getGames = async () => {
    const [promise] = executeGetRequest(apiPath.games);
    const result: any = await promise;
    return result.data;
};

/**
 * Fetch a game by id
 * @param id The id of the game
 * @returns The game
 */
export const getGameById = async (id: string) => {
    const [promise] = executeGetRequest(createGamePathWithId(id));
    const result: any = await promise;
    return result.data;
};