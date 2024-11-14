import { BoardgameInventory } from "../../secondary_ports/boardgame-inventory/driven_port";
import { PlayAGame } from "./driver_port";

type Dependencies = {
  boardgameInventory: BoardgameInventory;
};

export function buildPlayAGame({
  boardgameInventory,
}: Dependencies): PlayAGame {
  async function forBoardgame(
    boardgameName: string,
    players: string[]
  ): ReturnType<PlayAGame["forBoardgame"]> {
    const boardgame =
      await boardgameInventory.getBoardgameByName(boardgameName);

    if (!boardgame) {
      throw new Error("Boardgame not found");
    }

    if (
      players.length < boardgame.minNumberOfPlayers ||
      players.length > boardgame.maxNumberOfPlayers
    ) {
      throw new Error("Invalid number of players");
    }

    return {
      boardgameName,
      bggId: boardgame.bggId,
      players,
    };
  }

  return {
    forBoardgame,
  };
}
