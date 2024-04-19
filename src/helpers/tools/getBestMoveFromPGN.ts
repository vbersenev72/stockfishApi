//@ts-ignore
import stockfish from "stockfish";

export async function getBestMoveFromPGN(position: string) {
  return new Promise((res, rej) => {
    const engine = stockfish();

    engine.postMessage("uci");

    engine.onmessage = function (msg: any) {
      console.log(msg);
      if (typeof (msg == "string") && msg.match("bestmove")) {
        res(msg);
      }
    };

    engine.postMessage("ucinewgame");
    engine.postMessage("position pgn " + position);
    engine.postMessage("go depth 18");
  });
}

// Не работает