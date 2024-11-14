import { describe, it, expect } from "vitest";
import { Play } from "../../model/play";
import { PlayAGame } from "../../use_cases/play-a-game/driver_port";
import { buildPlayAGame } from "../../use_cases/play-a-game/implementation";
import { boardgameInventoryStub } from "../../secondary_ports/boardgame-inventory/stub";

describe("Play a game functionnal tests", () => {
  it("should play a game with the correct number of players", async () => {
    // Given
    const boardgameName = "Brass Birmingham";
    const players = ["Michel", "John"];

    // When
    // le but est d'appeler le domain
    const playAGame: PlayAGame = buildPlayAGame({
      boardgameInventory: boardgameInventoryStub,
    });

    const play: Play = await playAGame.forBoardgame(boardgameName, players);

    // Then
    expect(play).toStrictEqual({
      boardgameName: "Brass Birmingham",
      bggId: "224517",
      players: ["Michel", "John"],
    });
  });
});
