import { BoardgameInventory } from "./driven_port";

export const boardgameInventoryStub: BoardgameInventory = {
  getBoardgameByName: async (name: string) => {
    return {
      name,
      bggId: "224517",
      maxNumberOfPlayers: 4,
      minNumberOfPlayers: 2,
    };
  },
};
