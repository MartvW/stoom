export type GameType = {
    id: string;
    name: string;
    price: number;
    players: number;
    type: "adventure" | "arcade" | "rpg" | "simulation" | "strategy";
    age: number;
    time: "short" | "medium" | "long";
    photo: string;
};