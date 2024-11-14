import { Play } from "../../model/play";

export type PlayAGame = {
  forBoardgame: (boardgameName: string, players: string[]) => Promise<Play>;
};
