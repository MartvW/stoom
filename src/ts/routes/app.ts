
// URL for the API
export const baseURL = 'https://api.stroom.martvanweeghel.nl'; //https://api.stroom.martvanweeghel.nl

// Routes for the app
export const appPath = {
    home: '/',
    gameInfo: '/games/:id',
};

// Routes for the API
export const apiPath = {
    games: '/games',
    game: '/games/:id',
};

// Create a route path with a parameter
export const createGamePathWithId = (id: string) => {
    return apiPath.game.replace(':id', id);
};

